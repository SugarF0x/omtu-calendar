import { isStringRecord } from "~/utils"

export function isRecordWithKeys<Keys extends string>(object: unknown, keys: Array<Keys>): object is Record<Keys, unknown> {
  if (!isStringRecord(object)) return false
  const objectKeys = Object.keys(object)
  return keys.every(key => objectKeys.includes(key))
}
