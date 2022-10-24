import { RawClassData, ClassData } from "~/store"
import { DATE_SEPARATOR, DAYS_FORMAT, DAYS_SEPARATOR, MONTHS_SEPARATOR } from "~/const"
import { isError } from "~/utils"

export function parseClassData(classData: Array<RawClassData[]>): Array<ClassData[]> | never {
  const result: Array<ClassData[]> = Array.from({ length: classData.length }, () => [])

  for (const [course, courseClassData] of Object.entries(classData)) {
    const courseNumber = Number(course)

    for (const classData of courseClassData) {
      const { id, note, time, room, groups, subjectId, dates } = classData

      const parsedNote = (!note || note === '-') ? undefined : note

      let parsedGroups = undefined
      if (groups !== '-') parsedGroups = groups.split(',').map(group => Number(group) - 1)
      if (parsedGroups && parsedGroups.some(isNaN)) throw new Error(`Неправильно заданы группы: ожидается 1,2,3... , получено ${groups}`)

      const parsedDates = parseDates(dates)
      if (isError(parsedDates)) throw parsedDates

      result[courseNumber].push({
        id,
        subjectId,
        time,
        room,
        groups: parsedGroups,
        note: parsedNote,
        dates: parsedDates
      })
    }
  }

  return result
}

export function parseDates(dates: string): string[] | Error {
  const result: string[] = []

  const splitAndStrippedDates = dates.split(MONTHS_SEPARATOR).map(date => date.trim())
  for (const months of splitAndStrippedDates) {
    const [days, month, year] = months.split(DATE_SEPARATOR)

    if (!days || !month || !year) return new Error(`Неверный формат даты: ожидалось dd,dd.MM.yyyy, получено ${months}`)

    for (const day of days.split(DAYS_SEPARATOR)) {
      const date = `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`
      if (date.length !== DAYS_FORMAT.length || isNaN(Number(`${day}${month}${year}`))) return new Error(`Неверный формат даты: ${splitAndStrippedDates}, получено ${date}`)
      result.push(`${day}.${month}.${year}`)
    }
  }

  return result
}
