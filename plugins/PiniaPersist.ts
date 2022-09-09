import { createPersistedState } from "pinia-plugin-persistedstate"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(createPersistedState({
    serializer: {
      deserialize: (store) => {
        const parsed = JSON.parse(store)

        for (const key of Object.keys(parsed)) {
          if (['error', 'loading'].some(flag => key.toLowerCase().includes(flag))) delete parsed[key]
        }

        return parsed
      },
      serialize: JSON.stringify,
    }
  }))
})

