import { actionTree } from "typed-vuex"
// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser"
import { mutations } from "./mutations"
import { Sheets, state } from "./state"
import { RawEvent, RawSpecialty, RawSubject } from "~/types"
import { validateSpecialty, validateEvent, validateSubject } from "~/utils"

class Parser<T> {
  parser: any

  constructor(id: string, page: string) {
    this.parser = new PublicGoogleSheetsParser(id, page)
  }

  parse(): Promise<T[]> {
    return this.parser.parse()
  }
}

export const actions = actionTree(
  { state, mutations },
  {
    async getData({ commit, state }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)

      const combinedSheets: Sheets = {
        specialties: [],
        subjects: [],
        events: []
      }

      const sheetIds = Object.values(this.app.$accessor.env.tables)

      try {
        for (const course of [1,2]) {
          const id = sheetIds[course-1]
          if (!id) continue

          const sheets = {
            specialties: new Parser<RawSpecialty>(id, "Специализация"),
            subjects: new Parser<RawSubject>(id, "Предметы"),
            events: new Parser<RawEvent>(id, "Занятия")
          }

          const specialties = (await sheets.specialties.parse())
          const subjects = (await sheets.subjects.parse())
          const events = (await sheets.events.parse())

          if (
            ![
              specialties.every(validateSpecialty),
              subjects.every(validateSubject),
              events.every(validateEvent),
            ].every(Boolean)
          ) {
            commit("SET_LOADING", false)
            commit("SET_ERROR", "В данных таблицы ошибка - обратитесь к администрации.")
            return
          }

          if (
            (state.isDataLoaded && [specialties, subjects, events].every(entry => entry.length === 0))
          ) {
            commit("SET_LOADING", false)
            commit("SET_ERROR", "Не удалось получить данные. Проверьте соединение с интернетом.")
            return
          }

          combinedSheets.specialties = combinedSheets.specialties.concat(specialties.map(entry => ({ ...entry, course })))
          combinedSheets.subjects = combinedSheets.subjects.concat(subjects.map(entry => ({ ...entry, course })))
          combinedSheets.events = combinedSheets.events.concat(events.map(entry => ({ ...entry, course })))
        }

        commit('SET_SHEETS', combinedSheets)
        commit('SET_UPDATE_TIME', new Date().toISOString())
      } catch (error) {
        if (error instanceof Error) {
          commit('SET_ERROR', error.message)
        } else if (typeof error === 'string') {
          commit('SET_ERROR', error)
        } else {
          commit('SET_ERROR', 'Unknown error')
        }
      }

      commit('SET_LOADING', false)
      commit('SET_DATA_LOADED')
    }
  },
)

export default actions
