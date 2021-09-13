import { Subject } from "./Subject"
import { Event } from "~/assets/types"

const TrendsSubject = new Subject({
  title: "Макро- и Микротренды",
  professor: "Хотяшева Ольга Михайловна",
  color: "#f032e6",
})

const DAYS = ["18.09.2021", "25.09.2021", "02.10.2021"]

const TRENDS: Event[] = []

DAYS.forEach((day) => {
  for (let group = 0; group < 4; group++) {
    TRENDS.push(
      TrendsSubject.getEvent({
        day,
        group,
        room: 315,
        start: 1,
        duration: 4,
      }),
    )
  }
})

export { TRENDS }
