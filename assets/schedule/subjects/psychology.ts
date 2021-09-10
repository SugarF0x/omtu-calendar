import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
const DAYS = [
  "14.09.2021",
  "21.09.2021",
  "28.09.2021",
  "05.10.2021",
  "12.10.2021",
  "19.10.2021",
  "26.10.2021",
  "02.11.2021",
]

const PSYCHOLOGY: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    PSYCHOLOGY.push({
      title: 'Психология в бизнесе',
      professor: 'Клепиков Олег Евгеньевич',
      group: i,
      class: 215,
      date: {
        start: parse(`${day} ${TIMETABLE[6][0]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
        end: parse(`${day} ${TIMETABLE[6][1]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
      },
    })
  }
})

export {
  PSYCHOLOGY
}
