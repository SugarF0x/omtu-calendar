import { defineStore } from "pinia"
import { isError } from "~/utils"
import { Config } from './types'
import { fetchConfigRequest } from './api'
import { useHourlyRefetch } from "~/hooks"
import { useDataStore } from "~/store"

export const useConfigStore = defineStore(
  "config",
  () => {
    let config = $ref<Config | null>(null)
    let isLoading = $ref(false)
    let error = $ref<Error | null>(null)
    let updateTimestamp = $ref<string>(new Date(0).toISOString())

    async function fetchConfig() {
      error = null
      isLoading = true

      const response = await fetchConfigRequest()

      if (isError(response)) {
        error = response
        isLoading = false
        return
      }

      config = response
      useDataStore().fetchData()

      isLoading = false
      updateTimestamp = new Date().toISOString()
    }

    useHourlyRefetch(fetchConfig, $$(updateTimestamp), config?.dataRefetchInterval)

    return $$({
      config,
      updateTimestamp,
      isLoading,
      error,
      fetchConfig
    })
  }
)
