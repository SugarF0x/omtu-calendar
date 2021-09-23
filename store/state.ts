import { getInitialGroup } from "~/assets/util"

export const defaultState = () => ({
  group: getInitialGroup(),
})

export const state = () => defaultState()

export default state
