import { defineStore } from "pinia"

export const useSettingsStore = defineStore(
  "settings",
  () => {
    let course = $ref<number | null>(null)
    let group = $ref<number | null>(null)
    let specialties = $ref<string[]>([])

    return $$({
      course,
      group,
      specialties,
    })
  }
)
