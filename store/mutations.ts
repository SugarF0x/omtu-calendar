import { mutationTree } from "typed-vuex"
import { addMonths } from "date-fns"
import { state, defaultState } from "./state"
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
    state.options.date = addMonths(new Date(state.options.date), -1).toISOString()
  },
  INC_MONTH: state => {
    state.options.date = addMonths(new Date(state.options.date), 1).toISOString()
  },
})

export default mutations
