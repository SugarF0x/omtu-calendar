import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'

const DAYS = [
  "23.10.2021",
  "30.10.2021",
  "06.11.2021",
  "13.11.2021",
  "20.11.2021",
  "27.11.2021",
]

const EVENT: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    EVENT.push({
      title: 'Event-менеджмент',
      professor: 'Шойгу Ксения Сергеевна',
      group: i,
      class: 315,
      date: {
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#bfef45"
    })
  }
})

export {
  EVENT
}
