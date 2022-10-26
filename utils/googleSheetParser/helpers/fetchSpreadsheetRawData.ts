import { $fetch } from "ohmyfetch"
import { toError } from "~/utils"

/* c8 ignore start */

export async function fetchSpreadsheetRawData(id: string, sheet: string): Promise<string | Error> {
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?sheet=${sheet}`

  try {
    return (await $fetch(url)).text()
  } catch (error) {
    return toError(error)
  }
}

/* c8 ignore stop */
