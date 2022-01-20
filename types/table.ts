export type OccurrenceType = "weekly" | "bi-weekly"

export interface RawCoreEntry {
  id: string
  startDate: string
  title: string
  professor: string
  room: string
  groups: string
  specialties: string
  start: string
  duration: string
  type: string
  amount: string
  note: string
}

export interface CoreEntry {
  id: number
  startDate: string
  title: string
  professor?: string
  room: number
  groups: number[]
  specialties: string[]
  start: number
  duration: number
  type: OccurrenceType
  amount: number
  note?: string
}

export interface RawSpecialtyEntry {
  id: string
  title: string
}

export type Specialties = Record<string, string>

export interface RawAmendmentEntry {
  id: string
  event: string
  newDate: string
  start: string
  duration: string
  note: string
}

export interface AmendmentEntry {
  id: number
  event: string
  newDate: string
  start: number
  duration: number
  note?: string
}
