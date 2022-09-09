import { defineStore } from "pinia"
import { fetchDataRequest } from "~/store/settings/api"
import { isError } from "~/utils"

export const useSettingsStore = defineStore(
  "settings",
  () => {
    let version = $ref(0)

    let course = $ref<number | null>(null)
    let group = $ref<number | null>(null)
    let specialties = $ref<string[]>([])

    let isLoading = $ref(false)
    let error = $ref<Error | null>(null)

    async function fetchData() {
      error = null
      isLoading = true

      const data = await fetchDataRequest()
      isLoading = false

      if (isError(data)) error = data
      else {
        console.log('cock and ball')
      }
    }

    return $$({
      version,
      course,
      group,
      specialties,
    })
  }
)
