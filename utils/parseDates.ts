import { DAYS_FORMAT } from "~/consts"

// separator between ranges with different months
const MONTHS_SEPARATOR = '/'
// separator between days-months-years
const DATE_SEPARATOR = '.'
// separator between days within single range
const DAYS_SEPARATOR = ','

export function parseDates(dates: string): string[] {
  const result: string[] = []

  const splitAndStrippedDates = dates.split(MONTHS_SEPARATOR).map(date => date.trim())
  for (const months of splitAndStrippedDates) {
    const [days, month, year] = months.split(DATE_SEPARATOR)

    for (const day of days.split(DAYS_SEPARATOR)) {
      const date = `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`
      if (date.length !== DAYS_FORMAT.length || isNaN(Number(`${day}${month}${year}`))) throw new Error(`Неверный формат даты: ${splitAndStrippedDates}, получено ${date}`)
      result.push(`${day}.${month}.${year}`)
    }
  }

  return result
}
