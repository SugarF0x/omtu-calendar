import { actionTree } from "typed-vuex"
// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser"
import { mutations } from "./mutations"
import { state } from "./state"
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

const SHEET_ID = "1sTEvkTc0QIcec_AUjcflMijUau2fnwIyNnLZU-kcsgA"
const docs = {
  specialties: new Parser<RawSpecialty>(SHEET_ID, "Специализация"),
  subjects: new Parser<RawSubject>(SHEET_ID, "Предметы"),
  events: new Parser<RawEvent>(SHEET_ID, "Занятия")
}

export const actions = actionTree(
  { state, mutations },
  {
    async getData({ commit, state }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)

      try {
        const specialties = (await docs.specialties.parse())
        const subjects = (await docs.subjects.parse())
        const events = (await docs.events.parse())

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

        commit('SET_SHEETS', { specialties, subjects, events })
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
