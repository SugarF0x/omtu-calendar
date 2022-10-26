import { isRecord } from "~/utils"

export function isRecordWithKeys<Keys extends string>(object: unknown, keys: Array<Keys>): object is Record<Keys, unknown> {
  if (!isRecord(object)) return false
  const objectKeys = Object.keys(object)
  return keys.every(key => objectKeys.includes(key))
}
