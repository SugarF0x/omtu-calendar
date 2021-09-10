export interface Subject {
  class: number
  title: string
  professor?: string
  date: {
    start: Date
    end: Date
  }
  group: number
}
