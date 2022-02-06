import { RawAmendmentEntry, RawCoreEntry, RawSpecialtyEntry } from "~/types"

export interface Sheets {
  specialties: RawSpecialtyEntry[]
  core: RawCoreEntry[]
  amendments: RawAmendmentEntry[]
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
    core: [],
    amendments: [],
  },
  updateTime: null,
  isDataLoaded: false,
  isLoading: false,
  error: null,
})

export const state = () => defaultState()

export default state
