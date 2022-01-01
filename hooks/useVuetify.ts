import { wrapProperty } from "@nuxtjs/composition-api"

export function useVuetify() {
  return wrapProperty("$vuetify", false)()
}
