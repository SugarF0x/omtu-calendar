import { Plugin } from '@nuxt/types'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

// @ts-ignore, this suppression is a webstorm-specific issue that will be solved in the next release
const PiniaPersist: Plugin = ({ $pinia }) => {
  $pinia.use(piniaPluginPersistedstate)
}

export default PiniaPersist
