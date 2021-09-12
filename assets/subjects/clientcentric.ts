import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'

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
        start: parse(`${day} ${TIMETABLE[1][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[4][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#87CEFA"
    })
  }
})

export {
  CLIENTCENTRIC
}
