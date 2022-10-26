import { defineStore } from "pinia"
import { isRawClassData, isSpecialtyData, isRawSubjectData, SpecialtyData, ClassData, RawSubjectData, RawClassData, SubjectData } from "./types"
import { useConfigStore } from "~/store"
import { useHourlyRefetch } from "~/hooks"
import { fetchDataFlow, parseClassData, parseSubjectData } from "./helpers"
import { toError } from "~/utils"

export const useDataStore = defineStore(
  "data",
  () => {
    let rawSubjects = $ref<Array<RawSubjectData[]>>([])
    let subjects = $ref<Array<SubjectData[]>>([])

    let specialties = $ref<Array<SpecialtyData[]>>([])

    let rawClasses = $ref<Array<RawClassData[]>>([])
    let classes = $ref<Array<ClassData[]>>([])

    const { config } = $(useConfigStore())

    let updateTimestamp = $ref(new Date(0).toISOString())
    let isLoading = $ref(false)
    let error = $ref<Error | null>(null) // TODO: replace all errors with strings (cuz cant persist error object)

    async function fetchData(): Promise<void> {
      if (!config?.sheetIds) return

      error = null
      isLoading = true

      try {
        for (const [course, sheetId] of Object.entries(config.sheetIds)) {
          const courseNumber = Number(course)

          await fetchDataFlow(sheetId, courseNumber, 'Предметы', isRawSubjectData, $$(rawSubjects))
          await fetchDataFlow(sheetId, courseNumber, 'Специализации', isSpecialtyData, $$(specialties))
          await fetchDataFlow(sheetId, courseNumber, 'Занятия', isRawClassData, $$(rawClasses))
        }

        classes = parseClassData(rawClasses)
        subjects = parseSubjectData(rawSubjects)
      } catch (e) {
        error = toError(e)
      }

      isLoading = false
      if (!error) updateTimestamp = new Date().toISOString()
    }

    useHourlyRefetch(fetchData, $$(updateTimestamp), config?.dataRefetchInterval)

    return $$({
      rawSubjects,
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
