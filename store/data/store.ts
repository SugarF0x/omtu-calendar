import { defineStore } from "pinia"
import { isRawClassData, isSpecialtyData, isSubjectData, SpecialtyData, ClassData, SubjectData, RawClassData } from "./types"
import { useConfigStore } from "~/store"
import { useHourlyRefetch } from "~/hooks"
import { fetchDataFlow, parseClassData } from "./helpers"
import { isError } from "~/utils"

export const useDataStore = defineStore(
  "data",
  () => {
    let subjects = $ref<Array<SubjectData[]>>([])
    let specialties = $ref<Array<SpecialtyData[]>>([])
    let rawClasses = $ref<Array<RawClassData[]>>([])
    let classes = $ref<Array<ClassData[]>>([])

    const { config } = useConfigStore()

    let updateTimestamp = $ref(new Date(0).toISOString())
    let isLoading = $ref(false)
    let error = $ref<Error | null>(null)

    async function fetchData(): Promise<void> {
      if (!config?.sheetIds) return

      error = null
      isLoading = true

      for (const [course, sheetId] of Object.entries(config.sheetIds)) {
        const courseNumber = Number(course)

        await fetchDataFlow(sheetId, 'Предметы', isSubjectData, courseNumber, $$(error), $$(subjects))
        if (error) break

        await fetchDataFlow(sheetId, 'Специализации', isSpecialtyData, courseNumber, $$(error), $$(specialties))
        if (error) break

        await fetchDataFlow(sheetId, 'Занятия', isRawClassData, courseNumber, $$(error), $$(rawClasses))
        if (error) break
      }

      const parsedClasses = parseClassData(rawClasses)
      if (isError(parsedClasses)) error = parsedClasses
      else classes = parsedClasses

      isLoading = false
      if (!error) updateTimestamp = new Date().toISOString()
    }

    useHourlyRefetch(fetchData, $$(updateTimestamp), config?.dataRefetchInterval)

    return $$({
      subjects,
      specialties,
      rawClasses,
      classes,
      updateTimestamp,
      isLoading,
      error,
      fetchData
    })
  }
)
