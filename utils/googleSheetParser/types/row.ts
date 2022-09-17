import { isRecordWithKeys } from "~/utils"

export interface DirtyRow {
  c: Array<null | {
    v: null | string
  }>
}

export interface Row {
  c: Array<{ v: string }>
}

export function isDirtyRow(row: unknown): row is DirtyRow {
  if (!isRecordWithKeys(row, ['c'])) return false

  const { c } = row
  if (!Array.isArray(c)) return false

  return c.every(item => item === null || item.v === null || typeof item.v === 'string')
}
