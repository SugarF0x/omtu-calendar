import { actionTree } from "typed-vuex"
import { mutations } from "./mutations"
import { EnvState, state } from "./state"

export const actions = actionTree(
  { state, mutations },
  {
    async getTableIDs({ commit }) {
      const sheets = await fetch('/sheets.json').then((e): Promise<EnvState['tables']> => e.json())
      commit('SET_TABLE_ID', { course: 1, id: sheets["1"] })
      commit('SET_TABLE_ID', { course: 2, id: sheets["2"] })
    }
  },
)

export default actions
