import { getAccessorType } from "typed-vuex"
import { wrapProperty } from "@nuxtjs/composition-api"
import * as data from './data'
import * as options from './options'
import * as env from './env'
import { state } from "~/store/state"
import { mutations } from "~/store/mutations"

export const accessor = getAccessorType({
  state,
  mutations,
  modules: {
    data,
    options,
    env
  }
})

export type Accessor = typeof accessor

export function useStoreAccessor(this: { app: { $accessor: Accessor } }) {
  if (!("app" in this)) throw new Error(`This hook is to be called from within vuex action`)

  return this.app.$accessor
}

export function useAccessor(): Accessor {
  return wrapProperty("$accessor", false)()
}
