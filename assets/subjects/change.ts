import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'

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
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#FF8C00"
    })
  }
})

export {
  CHANGE
}
