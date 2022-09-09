import { defineStore } from "pinia"

export const useCalendarStore = defineStore(
  "calendar",
  () => {
    const month = $ref(new Date().getMonth())
    const year = $ref(new Date().getFullYear())

    return $$({
      month,
      year
    })
  }, {
    persist: false
  }
)
