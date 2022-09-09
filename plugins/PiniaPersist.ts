import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(piniaPluginPersistedstate)
})
