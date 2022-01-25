import { getterTree } from "typed-vuex"
import { state } from './state'
import { Options } from "~/utils"

export const getters = getterTree(state, {
  isFTUE: state => {
    for (const option in state.options) {
      if (state.options[(option as keyof Options)] === null) return true
    }
    return false
  }
})

export default getters
