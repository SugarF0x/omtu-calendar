import { defineStore } from "pinia"
import { ref } from "#imports"

export const useCalendarStore = defineStore(
  "calendar",
  () => {
    const cockAndBall = ref(false)

    return {
      cockAndBall
    }
  },
  {
    persist: true,
  }
)
