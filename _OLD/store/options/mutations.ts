import { mutationTree } from "typed-vuex"
import { defaultState, state } from "./state"

export const mutations = mutationTree(state, {
  RESET_STATE: state => {
    Object.assign(state, defaultState())
  },
  SET_GROUP: (state, value: number) => {
    state.group = value
  },
  SET_COURSE: (state, value: number) => {
    state.course = value
  },
  SET_SPECIALTIES: (state, value: string[]) => {
    state.specialties = value
  }
})

export default mutations
