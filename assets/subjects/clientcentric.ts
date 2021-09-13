import { Subject } from "./Subject"
import { Event } from "~/assets/types"

const ClientcentricSubject = new Subject({
  title: "Клиентоцентричность в сфере услуг",
  professor: "Краснослабодцев Александр Леонидович",
  color: "#f58231",
})

const DAYS = ["09.10.2021", "16.10.2021"]

const CLIENTCENTRIC: Event[] = []

DAYS.forEach((day) => {
  for (let group = 0; group < 4; group++) {
    CLIENTCENTRIC.push(
      ClientcentricSubject.getEvent({
        day,
        group,
        room: 315,
        start: 1,
        duration: 4,
      }),
    )
  }
})

export { CLIENTCENTRIC }
