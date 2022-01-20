export type ChangeType = 'cancelled' | 'added'

export interface Event {
  id: string
  name: string
  professor?: string
  room: number
  groups: number[]
  specialties: string[]
  start: Date
  end: Date
  note?: string
  color: string
  change?: ChangeType
}
