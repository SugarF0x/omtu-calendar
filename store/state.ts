import { loadCachedOptions } from "~/utils"

export const defaultState = () => ({
  options: loadCachedOptions(),
})

export const state = () => defaultState()

export default state
