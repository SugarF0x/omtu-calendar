/**
 * this is a runtime interface
 * this field will not be present in the docs
 * but will be mapped onto entries on fetch
 */
interface Course {
  course: number
}

export interface RawSpecialty extends Course {
  id: string
  title: string
}

export type Specialties = Record<string, string>

export interface RawSubject extends Course {
  id: string
  title: string
  professor: string
  specs: string
  color: string
}

export interface Subject extends Course {
  id: string
  title: string
  professor?: string
  specs: string[]
  color: string
}

export interface RawEvent extends Course {
  id: string
  subjectId: string
  groups: string
  time: string
  room: string
  note: string
  dates: string
}

export interface Event extends Course {
  id: string
  subjectId: string
  groups: number[]
  time: string
  room: string
  note?: string
  dates: string[]
}

export interface TransformedEvent extends Course {
  id: string
  room: string
  groups: number[]
  time: string
  date: Date
  note?: string
  subject: Subject
}
