import { getterTree } from 'typed-vuex'
import { endOfDay, setHours, setMinutes, parse } from "date-fns"
import { state }from './'
import { Subject, Event, TransformedEvent, Specialties } from "~/types"
import { DAYS_FORMAT } from "~/consts"
import { getColorFromText, parseDates } from "~/utils"

export interface FormattedSheets {
  specialties: Specialties
  subjects: Subject[]
  events: Event[]
}

function replaceDashWithUndefined(value: string) {
  if (value === '-') return undefined
  return value
}

function applyTime(date: Date, time: string) {
  const [start] = time.split(' - ')
  if (isNaN(Number(start.replaceAll(':','')))) return endOfDay(date)

  const [hours, minutes] = start.split(':')
  return setHours(setMinutes(date, Number(minutes)), Number(hours))
}

export const getters = getterTree(state, {
  parsedSheets: (state): FormattedSheets => {
    const sheets = state.sheets
    const formatted: FormattedSheets = {
      specialties: {},
      subjects: [],
      events: []
    }

    for (const entry of sheets.specialties) {
      formatted.specialties[entry.id] = entry.title
    }

    for (const entry of sheets.subjects) {
      formatted.subjects.push({
        id: Number(entry.id),
        professor: replaceDashWithUndefined(entry.professor),
        title: entry.title,
        color:  entry.color === '-' ? getColorFromText(entry.title) : entry.color,
        specs: entry.specs === '-' ? Object.keys(formatted.specialties) : entry.specs.split(',')
      })
    }

    for (const entry of sheets.events) {
      formatted.events.push({
        id: Number(entry.id),
        subjectId: Number(entry.subjectId),
        time: entry.time,
        note: replaceDashWithUndefined(entry.note),
        room: entry.room,
        groups: entry.groups === '-' ? [1,2,3,4] : entry.groups.split(',').map(item => Number(item)),
        dates: parseDates(entry.dates)
      })
    }

    return formatted
  },
  parsedUpdateTime: state => state.updateTime ? new Date(state.updateTime).valueOf() : null,
  events: (_, getters): TransformedEvent[] => {
    const parsedSheets = getters.parsedSheets as FormattedSheets

    const events: TransformedEvent[] = []

    for (const entry of parsedSheets.events) {
      for (const day of entry.dates) {
        const subject = parsedSheets.subjects.find(subj => subj.id === entry.subjectId)
        if (!subject) throw new Error('Неопознанный ID предмета')

        events.push({
          id: `${entry.id}#${day}`,
          date: applyTime(parse(day, DAYS_FORMAT, new Date()), entry.time),
          note: entry.note,
          time: entry.time,
          room: entry.room,
          groups: entry.groups,
          subject
        })
      }
    }

    return events
  }
})

export default getters
