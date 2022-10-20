import { defineStore } from "pinia"
import { ClassData, isClassData, isSpecialtyData, isSubjectData, SpecialtyData, SubjectData } from "./types"
import { useConfigStore } from "~/store"
import { useHourlyRefetch } from "~/hooks"
import { fetchDoc } from "~/utils/googleSheetParser"
import { isError } from "~/utils"

export const useDataStore = defineStore(
  "data",
  () => {
    let subjects = $ref<Array<SubjectData[]>>([])
    let specialties = $ref<Array<SpecialtyData[]>>([])
    let classes = $ref<Array<ClassData[]>>([])

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

          subjects[Number(course)] = subjectsResponse
        }

        {
          const specialtiesResponse = await fetchDoc<SpecialtyData>(sheetId, 'Специализации', isSpecialtyData)

          if (isError(specialtiesResponse)) {
            error = specialtiesResponse
            break
          }

          specialties[Number(course)] = specialtiesResponse
        }

        {
          const classesResponse = await fetchDoc<ClassData>(sheetId, 'Занятия', isClassData)

          if (isError(classesResponse)) {
            error = classesResponse
            break
          }

          classes[Number(course)] = classesResponse
        }
      }

      isLoading = false
    }

    useHourlyRefetch(fetchData, lastUpdateTimestamp, config?.dataRefetchInterval)

    return $$({
      subjects,
      specialties,
      classes,
      lastUpdateTimestamp,
      isLoading,
      error,
      fetchData
    })
  }
)
