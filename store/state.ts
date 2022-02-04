import { startOfMonth } from "date-fns"
import { loadCachedOptions } from "~/utils"

export const defaultState = () => ({
  options: loadCachedOptions(),
  month: startOfMonth(new Date()).toISOString()
})

export const state = () => defaultState()

export default state
