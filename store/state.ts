import { startOfMonth } from "date-fns"
import { getInitialGroup } from "~/assets/utils"

export const defaultState = () => ({
  group: getInitialGroup(),
  date: startOfMonth(new Date()).toISOString(),
})

export const state = () => defaultState()

export default state
