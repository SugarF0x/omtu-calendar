import { defineStore } from "pinia"
import { ref } from "#imports"
import { isError } from "~/utils"
import { Config } from './types'
import { fetchConfigRequest } from './api'

export const useConfigStore = defineStore(
  "config",
  () => {
    const config = ref<Config | null>(null)
    const isLoading = ref(false)
    const error = ref<Error | null>(null)

    async function fetchConfig() {
      error.value = null
      isLoading.value = true

      const response = await fetchConfigRequest()
      isLoading.value = false

      if (isError(response)) error.value = response
      else config.value = response
    }

    return {
      config,
      isLoading,
      error,
      fetchConfig
    }
  }
)
