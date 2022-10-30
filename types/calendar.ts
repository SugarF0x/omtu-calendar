export interface CalendarCustomData {
  title: string
  color: string
  room: string
  time: string
  professor?: string
  note?: string
}

export interface CalendarAttributes {
  key: string
  dates: Date[]
  customData: CalendarCustomData
}
