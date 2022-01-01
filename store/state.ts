import { startOfMonth } from "date-fns"
import { getStoredGroup } from "~/assets/utils"

export const defaultState = () => ({
  group: getStoredGroup(),
  date: startOfMonth(new Date()).toISOString(),
})

export const state = () => defaultState()

export default state
