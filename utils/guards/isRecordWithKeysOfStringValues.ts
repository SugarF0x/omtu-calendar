import { isRecordWithKeys } from "~/utils/guards/isRecordWithKeys"

export function isRecordWithKeysOfStringValues<Keys extends string>(object: unknown, keys: Array<Keys>): object is Record<Keys, string> {
  if (!isRecordWithKeys(object, keys)) return false
  return keys.every(key => typeof object[key] === 'string')
}
