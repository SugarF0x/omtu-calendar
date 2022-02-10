import { DAYS_FORMAT } from "~/consts"

export function parseDates(dates: string): string[] {
  const result: string[] = []

  for (const months of dates.split(' - ')) {
    const [days, month, year] = months.split('/')
    for (const day of days.split(',')) {
      const date = `${day}.${month}.${year}`
      if (date.length !== DAYS_FORMAT.length || isNaN(Number(`${day}${month}${year}`))) throw new Error('Неверный формат даты')
      result.push(`${day}.${month}.${year}`)
    }
  }

  return result
}
