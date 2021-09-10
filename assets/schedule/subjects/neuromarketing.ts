import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
const DAYS = [
  "09.11.2021",
  "16.11.2021",
  "23.11.2021",
  "30.11.2021",
  "07.12.2021",
  "14.12.2021",
  "21.12.2021",
]

const NEUROMARKETING: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    NEUROMARKETING.push({
      title: 'Нейромаркетинг',
      professor: 'Клепиков Олег Евгеньевич',
      group: i,
      class: 215,
      date: {
        start: parse(`${day} ${TIMETABLE[7][0]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
        end: parse(`${day} ${TIMETABLE[7][1]}`, `${DaysFormat} ${TimetableFormat}`, new Date()),
      },
    })
  }
})

export {
  NEUROMARKETING
}
