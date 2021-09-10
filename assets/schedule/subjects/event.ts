import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
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
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
      },
    })
  }
})

export {
  EVENT
}
