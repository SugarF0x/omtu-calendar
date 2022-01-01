import { mutationTree } from "typed-vuex"
import { addMonths } from "date-fns"
import { state, defaultState } from "./state"
import { Specialty } from "~/types"
import { setOptions } from "~/utils"

export const mutations = mutationTree(state, {
  RESET_STATE: state => {
    Object.assign(state, defaultState())
  },
  SET_GROUP: (state, value: number) => {
    setOptions({ ...state.options, group: value })
    state.options.group = value
  },
  SET_COURSE: (state, value: number) => {
    setOptions({ ...state.options, course: value })
    state.options.course = value
  },
  SET_SPECIALTY: (state, value: Specialty) => {
    setOptions({ ...state.options, specialty: value })
    state.options.specialty = value
  },
  DEC_MONTH: state => {
    state.date = addMonths(new Date(state.date), -1).toISOString()
  },
  INC_MONTH: state => {
    state.date = addMonths(new Date(state.date), 1).toISOString()
  },
})

export default mutations
