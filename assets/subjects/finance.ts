import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'

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

const FINANCE: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    FINANCE.push({
      title: 'Финансовое моделирование',
      professor: 'Шаренков Сергей Борисович',
      group: i,
      class: 214,
      date: {
        start: parse(`${day} ${TIMETABLE[6][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[7][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#3cb44b"
    })
  }
})

export {
  FINANCE
}
