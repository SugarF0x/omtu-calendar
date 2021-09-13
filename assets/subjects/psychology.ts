import { Subject } from "./Subject"
import { Event } from "~/assets/types"

const PsychologySubject = new Subject({
  title: "Психология в бизнесе",
  professor: "Клепиков Олег Евгеньевич",
  color: "#64167c",
})

const DAYS = [
  "14.09.2021",
  "21.09.2021",
  "28.09.2021",
  "05.10.2021",
  "12.10.2021",
  "19.10.2021",
  "26.10.2021",
  "02.11.2021",
]

const PSYCHOLOGY: Event[] = []

DAYS.forEach((day) => {
  for (let group = 0; group < 4; group++) {
    PSYCHOLOGY.push(
      PsychologySubject.getEvent({
        day,
        group,
        room: 215,
        start: 6,
        duration: 2,
      }),
    )
  }
})

export { PSYCHOLOGY }
