import { DirtyRow, Row } from "../types"

export function sanitizeRow(row: DirtyRow): Row {
  return {
    c: row.c.filter((item): item is { v: string } => {
      if (item === null) return false
      if (item.v === null) return false
      return true
    })
  }
}
