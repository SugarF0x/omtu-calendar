import { startOfMonth } from "date-fns"
import { getOptions } from "~/utils"

export const defaultState = () => ({
  options: getOptions(),
  date: startOfMonth(new Date()).toISOString(),
})

export const state = () => defaultState()

export default state
