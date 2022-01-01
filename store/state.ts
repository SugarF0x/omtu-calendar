import { startOfMonth } from "date-fns"
import { getStoredCourse, getStoredGroup, getStoredSpecialty } from "~/utils"

export const defaultState = () => ({
  group: getStoredGroup(),
  course: getStoredCourse(),
  specialty: getStoredSpecialty(),
  date: startOfMonth(new Date()).toISOString(),
})

export const state = () => defaultState()

export default state
