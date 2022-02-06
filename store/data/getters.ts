import { getterTree } from 'typed-vuex'
import { addWeeks, format, parse } from "date-fns"
import { state }from './'
import { AmendmentEntry, CoreEntry, OccurrenceType, Specialties, Event } from "~/types"
import { DAYS_FORMAT, TIMETABLE, TIMETABLE_FORMAT } from "~/consts"
import { getColorFromText } from "~/utils"

export interface FormattedSheets {
  specialties: Specialties
  core: CoreEntry[]
  amendments: AmendmentEntry[]
}

function replaceDashWithEmptyString(value: string) {
  if (value === '-') return ''
  return value
}

export const getters = getterTree(state, {
  parsedSheets: (state): FormattedSheets => {
    const sheets = state.sheets
    const formatted: FormattedSheets = {
      specialties: {},
      core: [],
      amendments: []
    }

    for (const entry of sheets.specialties) {
      formatted.specialties[entry.id] = entry.title
    }

    for (const entry of sheets.core) {
      formatted.core.push({
        id: Number(entry.id),
        amount: Number(entry.amount),
        groups: entry.groups === '-' ? [1,2,3,4] : entry.groups.split(',').map(item => Number(item)),
        note: replaceDashWithEmptyString(entry.note),
        room: Number(entry.room),
        duration: Number(entry.duration),
        specialties: entry.specialties === '-' ? Object.keys(formatted.specialties) : entry.specialties.split(','),
        start: Number(entry.start),
        professor: replaceDashWithEmptyString(entry.professor),
        title: entry.title,
        type: entry.type as OccurrenceType,
        startDate: entry.startDate
      })
    }

    for (const entry of sheets.amendments) {
      formatted.amendments.push({
        id: Number(entry.id),
        event: entry.event,
        note: replaceDashWithEmptyString(entry.note),
        start: Number(entry.start),
        newDate: entry.newDate,
        duration: Number(entry.duration)
      })
    }

    return formatted
  },
  parsedUpdateTime: state => state.updateTime ? new Date(state.updateTime).valueOf() : null,
  events: (_, getters): Event[] => {
    const parsedSheets = getters.parsedSheets as FormattedSheets

    const events: Event[] = []

    for (const entry of parsedSheets.core) {
      for (let i = 0; i < entry.amount; i++) {
        const date = format(addWeeks(parse(entry.startDate, DAYS_FORMAT, new Date()), entry.type === 'weekly' ? i : i*2), DAYS_FORMAT)

        events.push({
          id: `${entry.id}#${i+1}`,
          name: entry.title,
          professor: entry.professor,
          room: entry.room,
          groups: entry.groups,
          specialties: entry.specialties,
          start: parse(`${date} ${TIMETABLE[entry.start - 1][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
          end: parse(`${date} ${TIMETABLE[entry.start + entry.duration - 2][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
          note: entry.note,
          color: getColorFromText(entry.title)
        })
      }
    }

    for (const entry of parsedSheets.amendments) {
      const event = events.find(item => item.id === entry.event)
      if (!event) continue
      event.change = 'cancelled'
      event.note = entry.note

      const date = format(parse(entry.newDate, DAYS_FORMAT, new Date()), DAYS_FORMAT)

      events.push({
        ...event,
        change: 'added',
        id: `${event.id}-${entry.id}`,
        note: entry.note,
        start: parse(`${date} ${TIMETABLE[entry.start - 1][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${date} ${TIMETABLE[entry.start + entry.duration - 2][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      })
    }

    return events
  }
})

export default getters
