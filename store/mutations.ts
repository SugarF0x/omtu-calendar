import { mutationTree } from "typed-vuex"
import { addMonths } from "date-fns"
import { defaultState, state } from "./state"
import { cacheOptions } from "~/utils"

export const mutations = mutationTree(state, {
  RESET_STATE: state => {
    Object.assign(state, defaultState())
  },
  SET_GROUP: (state, value: number) => {
    cacheOptions({ ...state.options, group: value })
    state.options.group = value
  },
  SET_COURSE: (state, value: number) => {
    cacheOptions({ ...state.options, course: value })
    state.options.course = value
  },
  SET_SPECIALTIES: (state, value: string[]) => {
    cacheOptions({ ...state.options, specialties: value })
    state.options.specialties = value
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
