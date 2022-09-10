import { isRecord, isRecordWithKeys, isRecordWithKeysOfStringValues } from "~/utils/guards"
import { Col, isCol } from "./col"
import { DirtyRow, isDirtyRow } from "./row"


export interface TableParsedResponse {
  reqId: string
  sig: string
  status: string
  table: {
    cols: Col[],
    rows: DirtyRow[],
    parsedNumHeaders: number
  }
  version: string
}

export function isTableRawResponse(object: unknown): object is TableParsedResponse {
  if (!isRecordWithKeysOfStringValues<Exclude<keyof TableParsedResponse, 'table'>>(object, ['reqId', "sig", "status", "version"])) return false
  if (!isRecordWithKeys<keyof TableParsedResponse>(object, ['table'])) return false
  if (!isRecord(object.table)) return false
  if (!isRecordWithKeys(object.table, ['cols', 'rows', 'parsedNumHeaders'])) return false
  if (!Array.isArray(object.table.cols)) return false
  if (object.table.cols.some(col => !isCol(col))) return false
  if (!Array.isArray(object.table.rows)) return false
  if (object.table.rows.some(row => !isDirtyRow(row))) return false
  if (typeof object.table.parsedNumHeaders !== 'number') return false
  return true
}
