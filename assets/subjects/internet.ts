import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'
import { NextWeekDayGenerator } from '~/assets/util'

const DAYS: string[] = []

const getNextWeek = NextWeekDayGenerator("15.09.2021")
while (true) {
  const date = getNextWeek()
  if (!date) break;
  DAYS.push(date)
}

const INTERNET: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    const lesson = i < 2 ? 8 : 7

    INTERNET.push({
      title: 'Интернет-маркетинг',
      professor: 'Слесарев Максим Александрович',
      group: i,
      class: 519,
      date: {
        start: parse(`${day} ${TIMETABLE[lesson][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[lesson][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: "#6495ED"
    })
  }
})

export {
  INTERNET
}
