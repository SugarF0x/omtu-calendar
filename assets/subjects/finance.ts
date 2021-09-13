import { Subject } from "./Subject"
import { Event } from "~/assets/types"

const FinanceSubject = new Subject({
  title: "Финансовое моделирование",
  professor: "Шаренков Сергей Борисович",
  color: "#3cb44b",
})

const DAYS = [
  "04.10.2021",
  "11.10.2021",
  "18.10.2021",
  "25.10.2021",
  "01.11.2021",
  "08.11.2021",
  "15.11.2021",
  "22.11.2021",
  "29.11.2021",
]

const FINANCE: Event[] = []

DAYS.forEach((day) => {
  for (let group = 0; group < 4; group++) {
    FINANCE.push(
      FinanceSubject.getEvent({
        day,
        group,
        room: 214,
        start: 6,
        duration: 2,
      }),
    )
  }
})

export { FINANCE }
