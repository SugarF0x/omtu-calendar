export interface RawSpecialty {
  id: string
  title: string
}

export type Specialties = Record<string, string>

export interface RawSubject {
  id: string
  title: string
  professor: string
  specs: string
  color: string
}

export interface Subject {
  id: string
  title: string
  professor?: string
  specs: string[]
  color: string
}

export interface RawEvent {
  id: string
  subjectId: string
  groups: string
  time: string
  room: string
  note: string
  dates: string
}

export interface Event {
  id: string
  subjectId: string
  groups: number[]
  time: string
  room: string
  note?: string
  dates: string[]
}

export interface TransformedEvent {
  id: string
  room: string
  groups: number[]
  time: string
  date: Date
  note?: string
  subject: Subject
}
