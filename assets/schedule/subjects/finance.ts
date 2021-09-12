import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
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
        start: parse(`${day} ${TIMETABLE[6][0]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
        end: parse(`${day} ${TIMETABLE[7][1]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
      },
      color: "#DA70D6"
    })
  }
})

export {
  FINANCE
}
