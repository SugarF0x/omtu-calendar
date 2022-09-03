import { mutationTree } from "typed-vuex"
import { state, defaultState, Sheets } from "./state"

export const mutations = mutationTree(state, {
  RESET_STATE: state => {
    Object.assign(state, defaultState())
  },
  SET_LOADING: (state, payload: boolean) => {
    state.isLoading = payload
  },
  SET_DATA_LOADED: state => {
    state.isDataLoaded = true
  },
  SET_ERROR: (state, payload: string | null) => {
    state.error = payload
  },
  SET_SHEETS: (state, payload: Sheets) => {
    state.sheets = payload
  },
  SET_UPDATE_TIME: (state, payload: string) => {
    state.updateTime = payload
  }
})

export default mutations
