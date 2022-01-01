import { mutationTree } from "typed-vuex"
import { addMonths } from "date-fns"
import { state, defaultState } from "./state"
import { Specialty } from "~/types"

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
  SET_SPECIALTY: (state, value: Specialty) => {
    state.specialty = value
  },
  DEC_MONTH: state => {
    state.date = addMonths(new Date(state.date), -1).toISOString()
  },
  INC_MONTH: state => {
    state.date = addMonths(new Date(state.date), 1).toISOString()
  },
})

export default mutations
