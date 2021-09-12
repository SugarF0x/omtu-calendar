import { parse } from 'date-fns'
import { DAYS_FORMAT, TIMETABLE, TIMETABLE_FORMAT } from '~/assets/consts'
import { Event } from '~/assets/types'

export interface SubjectOptions {
  title: string
  professor?: string
  color: string
}

interface GetEventOptions {
  day: string
  start: number
  duration: number
  group: number
  room: number
}

export class Subject {
  title: string
  professor?: string
  color: string

  constructor(options: SubjectOptions) {
    this.title = options.title
    this.professor = options.professor
    this.color = options.color
  }

  getEvent(options: GetEventOptions): Event {
    return {
      name: this.title,
      professor: this.professor,
      color: this.color,
      room: options.room,
      category: options.group,
      start: parse(`${options.day} ${TIMETABLE[options.start][0]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
      end: parse(`${options.day} ${TIMETABLE[options.start + options.duration - 1][1]}`, `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`, new Date()),
    }
  }
}
