import { isRecordWithKeysOfStringValues } from "~/utils"

export interface SpecialtyRawData {
  id: string
  title: string
}

export function isSpecialtyRawData(data: unknown): data is SpecialtyRawData {
  return isRecordWithKeysOfStringValues<keyof SpecialtyRawData>(data, ["id", "title"])
}
