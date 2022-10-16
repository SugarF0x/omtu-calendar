import { defineStore } from "pinia"
import { isError } from "~/utils"
import { Config } from './types'
import { fetchConfigRequest } from './api'
import { useRefetch } from "./hooks"

export const useConfigStore = defineStore(
  "config",
  () => {
    let version = $ref(0)

    let config = $ref<Config | null>(null)
    let isLoading = $ref(false)
    let error = $ref<Error | null>(null)
    let updateTimestamp = $ref<string>(new Date(0).toISOString())

    async function fetchConfig() {
      error = null
      isLoading = true

      const response = await fetchConfigRequest()
      isLoading = false

      if (isError(response)) error = response
      else config = response
    }

    useRefetch(fetchConfig, updateTimestamp, config?.dataRefetchInterval)

    return $$({
      config,
      isLoading,
      error,
      fetchConfig
    })
  }
)
