import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'

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
        start: parse(`${day} ${TIMETABLE[6][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[6][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#911eb4"
    })
  }
})

export {
  PSYCHOLOGY
}
