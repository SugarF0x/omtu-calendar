import { toError } from "~/utils"
import { sanitizeRow } from "./sanitizeRow"
import { isTableRawResponse } from "../types"

export function parseSpreadsheetRawData<Expected extends Record<string, string>>(data: string, isValid: (result: unknown) => result is Expected): Expected[] | Error {
  try {
    const trimmedData = data.split('\n')[1].replace(/google.visualization.Query.setResponse\(|\);/g, '')
    const parsedData = JSON.parse(trimmedData)
    if (!isTableRawResponse(parsedData)) return new Error('Malformed data received: table response does not match type guard')

    const sanitizedRows = parsedData.table.rows.map(sanitizeRow)
    const [headersRow, ...dataRows] = sanitizedRows
    const headers = headersRow.c.map(entry => entry.v)

    const result: Expected[] = []

    for (const row of dataRows) {
      const transformedEntry = row.c.reduce<Record<string, string>>((acc, val, index) => {
        acc[headers[index]] = val.v
        return acc
      }, {})

      if (!isValid(transformedEntry)) return new Error('Malformed data received: row entry does not match type guard')
      result.push(transformedEntry)
    }

    return result
  } catch (e) {
    return toError(e)
  }
}
