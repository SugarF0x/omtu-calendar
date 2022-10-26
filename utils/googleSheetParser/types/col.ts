import { isRecord } from "~/utils"

export interface Col {
  id: string
  label: ""
  type: "string"
}

export function isCol(col: unknown): col is Col {
  if (!isRecord(col)) return false
  if (typeof col.id !== 'string') return false
  return col.label === "" && col.type === "string"
}
