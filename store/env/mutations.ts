import { mutationTree } from "typed-vuex"
import { defaultState, state } from "./state"

export const mutations = mutationTree(state, {
  RESET_STATE: state => {
    Object.assign(state, defaultState())
  },
  TOGGLE_DEV_MODE: (state, payload?: boolean) => {
    state.isDev = payload ?? !state.isDev
  },
  SET_TABLE_ID: (state, payload: { course: 1 | 2, id: string }) => {
    state.tables[payload.course] = payload.id
  },
})

export default mutations
