import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
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
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
      },
    })
  }
})

export {
  TRENDS
}
