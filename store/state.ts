import { getOptions } from "~/utils"

export const defaultState = () => ({
  options: getOptions(),
})

export const state = () => defaultState()

export default state
