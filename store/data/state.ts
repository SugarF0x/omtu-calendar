import { RawEvent, RawSubject, RawSpecialty } from "~/types"

export interface Sheets {
  specialties: RawSpecialty[]
  subjects: RawSubject[]
  events: RawEvent[]
}

export interface DataStoreState {
  sheets: Sheets,
  updateTime: null | string
  isDataLoaded: boolean
  isLoading: boolean
  error: string | null
}

export const defaultState = (): DataStoreState => ({
  sheets: {
    specialties: [],
    subjects: [],
    events: [],
  },
  updateTime: null,
  isDataLoaded: false,
  isLoading: false,
  error: null,
})

export const state = () => defaultState()

export default state
