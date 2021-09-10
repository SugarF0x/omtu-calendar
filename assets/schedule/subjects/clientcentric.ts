import { parse } from 'date-fns'
import { TIMETABLE, TimetableFormat } from '../'
import { Subject } from './'

const DaysFormat = 'dd.mm.yyyy'
const DAYS = [
  "09.10.2021",
  "16.10.2021",
]

const CLIENTCENTRIC: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    CLIENTCENTRIC.push({
      title: 'Клиентоцентричность в сфере услуг',
      professor: 'Краснослабодцев Александр Леонидович',
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
  CLIENTCENTRIC
}
