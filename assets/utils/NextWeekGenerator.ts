import { addDays, format, getYear, parse } from "date-fns"
import { DAYS_FORMAT } from "~/assets/consts"

export function NextWeekDayGenerator(start: string): () => string | null {
  let date = parse(start, DAYS_FORMAT, new Date())

  return function () {
    if (getYear(date) > 2021) return null

    const returnDate = format(date, DAYS_FORMAT)
    date = addDays(date, 7)
    return returnDate
  }
}
