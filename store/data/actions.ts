import { actionTree } from "typed-vuex"
// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser"
import { mutations } from "./mutations"
import { state } from "./state"
import { RawAmendmentEntry, RawCoreEntry, RawSpecialtyEntry } from "~/types"
import { validateAmendment, validateCoreEntry, validateSpecialty } from "~/utils"

const SHEET_ID = "1d5yh2_8iCB6SzrDIv-F9EzdMfSyBUz7mjmVXVmwfHAE"
const parser = new PublicGoogleSheetsParser()

export const actions = actionTree(
  { state, mutations },
  {
    async getData({ commit, state }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)

      try {
        const specialties = (await parser.parse(SHEET_ID, "Специализации")) as RawSpecialtyEntry[]
        const core = (await parser.parse(SHEET_ID, "Основа")) as RawCoreEntry[]
        const amendments = (await parser.parse(SHEET_ID, "Переносы")) as RawAmendmentEntry[]

        if (
          ![
            specialties.every(validateSpecialty),
            core.every(validateCoreEntry),
            amendments.every(validateAmendment),
          ].every(Boolean)
        ) {
          commit("SET_LOADING", false)
          commit("SET_ERROR", "В данных таблицы ошибка - обратитесь к администрации.")
          return
        }

        if (
          (state.isDataLoaded && [specialties, core, amendments].every(entry => entry.length === 0))
        ) {
          commit("SET_LOADING", false)
          commit("SET_ERROR", "Не удалось получить данные. Проверьте соединение с интернетом.")
          return
        }

        commit('SET_SHEETS', { specialties, core, amendments })
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
