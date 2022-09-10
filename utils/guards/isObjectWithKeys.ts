// noinspection ES6PreferShortImport - dependency cycle
import { isStringRecord } from "./isStringRecord"

export function isObjectWithKeys<Keys extends string>(object: unknown, keys: Array<Keys>): object is Record<Keys, string> {
  if (!isStringRecord(object)) return false
  return keys.every(key => typeof object[key] === 'string')
}
