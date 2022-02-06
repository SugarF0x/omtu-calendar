import { startOfMonth } from "date-fns"

export interface StoreState {
  version: number
  month: string
}

export const defaultState = (): StoreState => ({
  version: 0,
  month: startOfMonth(new Date()).toISOString()
})

export const state = () => defaultState()

export default state
