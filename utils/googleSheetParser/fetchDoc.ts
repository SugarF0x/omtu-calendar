import { isError } from "~/utils"
import { fetchSpreadsheetRawData, parseSpreadsheetRawData } from "~/utils/googleSheetParser/helpers"

export async function fetchDoc<Expected>(id: string, sheet: string, guard: (data: unknown) => data is Expected): Promise<Expected[] | Error> {
  const sheetResponse = await fetchSpreadsheetRawData(id, sheet)
  if (isError(sheetResponse)) return sheetResponse

  const parsedResponse = parseSpreadsheetRawData(sheetResponse, guard)
  if (isError(parsedResponse)) return parsedResponse

  return parsedResponse
}
