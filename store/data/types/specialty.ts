import { isRecordWithKeysOfStringValues } from "~/utils"

export interface SpecialtyData {
  id: string
  title: string
}

export function isSpecialtyData(data: unknown): data is SpecialtyData {
  return isRecordWithKeysOfStringValues<keyof SpecialtyData>(data, ["id", "title"])
}
