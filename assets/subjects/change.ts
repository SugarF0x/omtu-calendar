import { Subject } from './Subject'
import { Event } from '~/assets/types'

const ChangeSubject = new Subject({
  title: 'Управление изменениями',
  professor: 'Нуффероева Татьяна Эммануиловна',
  color: "#e6194B"
})

const DAYS = [
  "04.12.2021",
  "11.12.2021",
  "18.12.2021",
]

const CHANGE: Event[] = []

DAYS.forEach(day => {
  for (let group = 0; group < 4; group++) {
    CHANGE.push(ChangeSubject.getEvent({
      day,
      group,
      start: 1,
      duration: 4,
      room: 315
    }))
  }
})

export {
  CHANGE
}
