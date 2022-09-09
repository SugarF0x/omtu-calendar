import { defineStore } from "pinia"
import { isError } from "~/utils"
import { Config } from './types'
import { fetchConfigRequest } from './api'

export const useConfigStore = defineStore(
  "config",
  () => {
    let config = $ref<Config | null>(null)
    let isLoading = $ref(false)
    let error = $ref<Error | null>(null)

    async function fetchConfig() {
      error = null
      isLoading = true

      const response = await fetchConfigRequest()
      isLoading = false

      if (isError(response)) error = response
      else config = response
    }

    return $$({
      config,
      isLoading,
      error,
      fetchConfig
    })
  }
)
