import { mutationTree } from "typed-vuex"
import { state, defaultState } from "./state"

export const mutations = mutationTree(state, {
  RESET_STATE: (state) => {
    Object.assign(state, defaultState())
  },
  SET_GROUP: (state, value: number) => {
    state.group = value
  },
  SET_MONTH: (state, value: number) => {
    state.month = value
  },
})

export default mutations
