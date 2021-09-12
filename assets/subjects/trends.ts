import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'

const DAYS = [
  "18.09.2021",
  "25.09.2021",
  "02.10.2021",
]

const TRENDS: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    TRENDS.push({
      title: 'Макро- и Микротренды',
      professor: 'Хотяшева Ольга Михайловна',
      group: i,
      class: 315,
      date: {
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#f032e6"
    })
  }
})

export {
  TRENDS
}
