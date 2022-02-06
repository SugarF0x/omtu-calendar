import { getterTree } from "typed-vuex"
import { state, OptionsState } from './state'

export const getters = getterTree(state, {
  isFTUE: state => {
    for (const option in state) {
      if (state[(option as keyof OptionsState)] === null) return true
    }
    return false
  }
})

export default getters
