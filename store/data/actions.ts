import { actionTree } from "typed-vuex"
// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser"
import { mutations } from "./mutations"
import { state } from "./state"
import { RawAmendmentEntry, RawCoreEntry, RawSpecialtyEntry } from "~/types"

const SHEET_ID = "1d5yh2_8iCB6SzrDIv-F9EzdMfSyBUz7mjmVXVmwfHAE"
const parser = new PublicGoogleSheetsParser()

// TODO: runtime type guard on fetch

export const actions = actionTree(
  { state, mutations },
  {
    async getData({ commit }) {
      commit('SET_LOADING', true)

      try {
        const specialties = (await parser.parse(SHEET_ID, "Специализации")) as RawSpecialtyEntry[]
        const core = (await parser.parse(SHEET_ID, "Основа")) as RawCoreEntry[]
        const amendments = (await parser.parse(SHEET_ID, "Переносы")) as RawAmendmentEntry[]

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
    }
  },
)

export default actions
