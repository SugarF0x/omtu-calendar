import { actionTree } from "typed-vuex"
import { mutations } from "./mutations"
import { EnvState, state } from "./state"

export const actions = actionTree(
  { state, mutations },
  {
    async getTableIDs({ commit, state }) {
      if (state.isDev) return

      const noCacheHeaders = new Headers()
      noCacheHeaders.append('pragma', 'no-cache')
      noCacheHeaders.append('cache-control', 'no-cache')

      const sheets = await fetch('/sheets.json', { headers: noCacheHeaders }).then((e): Promise<EnvState['tables']> => e.json())

      commit('SET_TABLE_ID', { course: 1, id: sheets["1"] })
      commit('SET_TABLE_ID', { course: 2, id: sheets["2"] })
    }
  },
)

export default actions
