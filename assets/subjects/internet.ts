import { Subject } from "./Subject"
import { Event } from "~/assets/types"
import { NextWeekDayGenerator } from "~/assets/util"

const InternetSubject = new Subject({
  title: "Интернет-маркетинг",
  professor: "Слесарев Максим Александрович",
  color: "#32acc7",
})

const DAYS: string[] = []

const getNextWeek = NextWeekDayGenerator("15.09.2021")
while (true) {
  const date = getNextWeek()
  if (!date) break
  DAYS.push(date)
}

const INTERNET: Event[] = []

DAYS.forEach((day) => {
  for (let group = 0; group < 4; group++) {
    const start = group < 2 ? 7 : 6

    INTERNET.push(
      InternetSubject.getEvent({
        day,
        group,
        start,
        room: 519,
        duration: 1,
      }),
    )
  }
})

export { INTERNET }
