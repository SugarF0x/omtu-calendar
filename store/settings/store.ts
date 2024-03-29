import { defineStore } from "pinia"

export const useSettingsStore = defineStore(
  "settings",
  () => {
    let course = $ref<number | null>(null)
    let group = $ref<number | null>(null)
    let specialties = $ref<string[]>([])

    let theme = $ref<'dark' | 'cupcake'>('cupcake')

    const isNewUser = $computed(() => course === null || group === null)

    return $$({
      course,
      group,
      specialties,
      isNewUser,
      theme
    })
  }
)
