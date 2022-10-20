import { defineStore } from "pinia"
import { ClassData, isClassData, isSpecialtyData, isSubjectData, SpecialtyData, SubjectData } from "./types"
import { useConfigStore, useSettingsStore } from "~/store"
import { useHourlyRefetch } from "~/hooks"
import { fetchDoc } from "~/utils/googleSheetParser"
import { isError } from "~/utils"

export const useDataStore = defineStore(
  "data",
  () => {
    let version = $ref(0)

    let allSubjects = $ref<Array<SubjectData[]>>([])
    let allSpecialties = $ref<Array<SpecialtyData[]>>([])
    let allClasses = $ref<Array<ClassData[]>>([])

    let { course } = useSettingsStore()

    const subjects = $computed<SubjectData[]>(() => allSubjects[course ?? -1] ?? [])
    const specialties = $computed<SpecialtyData[]>(() => allSpecialties[course ?? -1] ?? [])
    const classes = $computed<ClassData[]>(() => allClasses[course ?? -1] ?? [])

    const { config } = useConfigStore()

    let lastUpdateTimestamp = $ref(new Date(0).toISOString())
    let isLoading = $ref(false)
    let error = $ref<Error | null>(null)

    async function fetchData(): Promise<void> {
      if (!config?.sheetIds) return

      error = null
      isLoading = true

      for (const [course, sheetId] of Object.entries(config.sheetIds)) {
        {
          const subjectsResponse = await fetchDoc<SubjectData>(sheetId, 'Предметы', isSubjectData)

          if (isError(subjectsResponse)) {
            error = subjectsResponse
            break
          }

          allSubjects[Number(course)] = subjectsResponse
        }

        {
          const specialtiesResponse = await fetchDoc<SpecialtyData>(sheetId, 'Специализации', isSpecialtyData)

          if (isError(specialtiesResponse)) {
            error = specialtiesResponse
            break
          }

          allSpecialties[Number(course)] = specialtiesResponse
        }

        {
          const classesResponse = await fetchDoc<ClassData>(sheetId, 'Предметы', isClassData)

          if (isError(classesResponse)) {
            error = classesResponse
            break
          }

          allClasses[Number(course)] = classesResponse
        }
      }

      isLoading = false
    }

    useHourlyRefetch(fetchData, lastUpdateTimestamp, config?.dataRefetchInterval)

    return $$({
      subjects,
      specialties,
      classes,
      fetchData
    })
  }
)
