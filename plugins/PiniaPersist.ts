import { createPersistedState } from "pinia-plugin-persistedstate"
import { defineNuxtPlugin } from "#app"
import { Pinia } from "pinia"

export default defineNuxtPlugin(nuxt => {
  const $pinia = nuxt.$pinia as Pinia

  $pinia.use((pinia) => { pinia.options.persist = true })

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

