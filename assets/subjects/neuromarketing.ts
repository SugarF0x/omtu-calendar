import { Subject } from "./Subject"
import { Event } from "~/types"

const NeuromarketingSubject = new Subject({
  title: "Нейромаркетинг",
  professor: "Клепиков Олег Евгеньевич",
  color: "#4363d8",
})

const DAYS = ["09.11.2021", "16.11.2021", "23.11.2021", "30.11.2021", "07.12.2021", "14.12.2021", "21.12.2021"]

const NEUROMARKETING: Event[] = []

DAYS.forEach(day => {
  for (let group = 0; group < 4; group++) {
    NEUROMARKETING.push(
      NeuromarketingSubject.getEvent({
        day,
        group,
        room: 215,
        start: 6,
        duration: 2,
      }),
    )
  }
})

export { NEUROMARKETING }
