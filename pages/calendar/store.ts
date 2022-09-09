import { defineStore } from "pinia"
import { ref } from "#imports"

export const useCalendarStore = defineStore(
  "calendar",
  () => {
    const month = ref(new Date().getMonth())

    return {
      month
    }
  }, {
    persist: false
  }
)
