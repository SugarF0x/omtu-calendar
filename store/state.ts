import { getMonth } from "date-fns"
import { getInitialGroup } from "~/assets/utils"

export const defaultState = () => ({
  group: getInitialGroup(),
  month: getMonth(new Date()),
})

export const state = () => defaultState()

export default state
