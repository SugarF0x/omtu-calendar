import { defineStore } from "pinia"
import { ref } from "#imports"

export const useSettingsStore = defineStore(
  "settings",
  () => {
    const version = ref(0)

    const course = ref<number | null>(null)
    const group = ref<number | null>(null)
    const specialties = ref<string[]>([])

    return {
      version,
      course,
      group,
      specialties,
    }
  }
)
