import { startOfMonth } from "date-fns"

export interface StoreState {
  month: string
}

export const defaultState = (): StoreState => ({
  month: startOfMonth(new Date()).toISOString()
})

export const state = () => defaultState()

export default state
