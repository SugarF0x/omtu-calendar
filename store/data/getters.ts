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
      const { course, title, id } = entry
      formatted.subjects.push({
        professor: replaceDashWithUndefined(entry.professor),
        color:  entry.color === '-' ? getColorFromText(entry.title) : entry.color,
        specs: entry.specs === '-' ? Object.keys(formatted.specialties) : entry.specs.split(','),
        id,
        course,
        title
      })
    }

    for (const entry of sheets.events) {
      const { id, subjectId, time, room, course } = entry
      formatted.events.push({
        note: replaceDashWithUndefined(entry.note),
        groups: entry.groups === '-' ? [1,2,3,4] : entry.groups.split(',').map(item => Number(item)),
        dates: parseDates(entry.dates),
        id,
        subjectId,
        time,
        room,
        course
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
        const subject = parsedSheets.subjects.find(subj => subj.id === entry.subjectId && subj.course === entry.course)
        if (!subject) throw new Error('Неопознанный ID предмета')

        const { note, time, room, groups, course } = entry
        events.push({
          id: `${entry.id}#${day}`,
          date: applyTime(parse(day, DAYS_FORMAT, new Date()), entry.time),
          note,
          time,
          room,
          groups,
          course,
          subject
        })
      }
    }

    return events
  }
})

export default getters
