import { $fetch } from "ohmyfetch"
import { toError } from "~/utils"

export async function fetchSpreadsheetRawData(id: string, sheet: string): Promise<string | Error> {
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?sheet=${sheet}`

  try {
    return await $fetch(url)
  } catch (error) {
    return toError(error)
  }
}
