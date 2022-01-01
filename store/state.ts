import { startOfMonth } from "date-fns"
import { getStoredCourse, getStoredGroup } from "~/utils"

export const defaultState = () => ({
  group: getStoredGroup(),
  course: getStoredCourse(),
  date: startOfMonth(new Date()).toISOString(),
})

export const state = () => defaultState()

export default state
