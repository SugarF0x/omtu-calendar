import { Subject } from "./Subject"
import { Event } from "~/types"

const EventSubject = new Subject({
  title: "Event-менеджмент",
  professor: "Шойгу Ксения Сергеевна",
  color: "#043b0c",
})

const DAYS = ["23.10.2021", "30.10.2021", "06.11.2021", "13.11.2021", "20.11.2021", "27.11.2021"]

const EVENT: Event[] = []

DAYS.forEach(day => {
  for (let group = 0; group < 4; group++) {
    EVENT.push(
      EventSubject.getEvent({
        day,
        group,
        room: 315,
        start: 1,
        duration: 3,
      }),
    )
  }
})

export { EVENT }
