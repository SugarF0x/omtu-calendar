import { parse } from 'date-fns'
import { TIMETABLE, TIMETABLE_FORMAT, DAYS_FORMAT } from '~/assets/consts'
import { Subject } from '~/assets/types'
import { NextWeekDayGenerator } from '~/assets/util'

const TITLE = 'Английский'
const COLOR = '#FFB6C1'

const DAYS: string[] = []

const getNextWeek = NextWeekDayGenerator("15.09.2021")
while (true) {
  const date = getNextWeek()
  if (!date) break;
  DAYS.push(date)
}

const ENGLISH: Subject[] = []

DAYS.forEach(day => {
  for (let i=0; i<4; i++) {
    const classRoom = i % 2 ? 510 : 509
    const lesson = i < 2 ? 7 : 8

    ENGLISH.push({
      title: TITLE,
      group: i,
      class: classRoom,
      date: {
        start: parse(`${day} ${TIMETABLE[lesson][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[lesson][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: COLOR
    })
  }
})

const FIRST_GROUP_DAYS = [
  "16.09.2021",
  "30.09.2021",
  "14.10.2021",
  "28.10.2021",
  "11.11.2021",
  "25.11.2021",
  "09.12.2021",
  "23.12.2021",
]
FIRST_GROUP_DAYS.forEach(day => {
  for (let i=0; i<2; i++) {
    const classRoom = i % 2 ? 510 : 509

    ENGLISH.push({
      title: TITLE,
      group: i,
      class: classRoom,
      date: {
        start: parse(`${day} ${TIMETABLE[6][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[7][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: COLOR
    })
  }
})

const SECOND_GROUP_DAYS = [
  "23.09.2021",
  "07.10.2021",
  "21.10.2021",
  "04.11.2021",
  "18.11.2021",
  "02.12.2021",
  "16.12.2021",
]
SECOND_GROUP_DAYS.forEach(day => {
  for (let i=0; i<2; i++) {
    const classRoom = i % 2 ? 510 : 509

    ENGLISH.push({
      title: TITLE,
      group: i + 2,
      class: classRoom,
      date: {
        start: parse(`${day} ${TIMETABLE[6][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
        end: parse(`${day} ${TIMETABLE[7][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      },
      color: COLOR
    })
  }
})

export {
  ENGLISH
}
