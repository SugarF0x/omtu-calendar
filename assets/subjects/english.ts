import { Subject } from './Subject'
import { Event } from '~/assets/types'
import { NextWeekDayGenerator } from '~/assets/util'

const EnglishSubject = new Subject({
  title: 'Английский',
  color: "#ffe119"
})

const DAYS: string[] = []

const getNextWeek = NextWeekDayGenerator("15.09.2021")
while (true) {
  const date = getNextWeek()
  if (!date) break;
  DAYS.push(date)
}

const ENGLISH: Event[] = []

DAYS.forEach(day => {
  for (let group = 0; group < 4; group++) {
    const room = group % 2 ? 510 : 509
    const start = group < 2 ? 7 : 8

    ENGLISH.push(EnglishSubject.getEvent({
      day,
      group,
      room,
      start,
      duration: 1
    }))
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
  for (let group = 0; group < 2; group++) {
    const room = group % 2 ? 510 : 509

    ENGLISH.push(EnglishSubject.getEvent({
      day,
      group,
      room,
      start: 6,
      duration: 2
    }))
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
  for (let group = 0; group < 2; group++) {
    const room = group % 2 ? 510 : 509

    ENGLISH.push(EnglishSubject.getEvent({
      day,
      group,
      room,
      start: 6,
      duration: 2
    }))
  }
})

export {
  ENGLISH
}
