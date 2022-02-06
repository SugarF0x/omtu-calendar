import { mutationTree } from "typed-vuex"
import { addMonths } from "date-fns"
import { defaultState, state } from "./state"

export const mutations = mutationTree(state, {
  RESET_STATE: state => {
    Object.assign(state, defaultState())
  },
  CLEAR_CACHE: _ => {
    localStorage.removeItem('vuex')
  },
  DEC_MONTH: state => {
    state.month = addMonths(new Date(state.month), -1).toISOString()
  },
  INC_MONTH: state => {
    state.month = addMonths(new Date(state.month), 1).toISOString()
  },
  SET_MONTH: (state, value: string) => {
    state.month = value
  }
})

export default mutations
