import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
const DAYS = [
  "04.12.2021",
  "11.12.2021",
  "18.12.2021",
]

const CHANGE: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    CHANGE.push({
      title: 'Управление изменениями',
      professor: 'Нуффероева Татьяна Эммануиловна',
      group: i,
      class: 315,
      date: {
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
      },
      color: "#FF8C00"
    })
  }
})

export {
  CHANGE
}
