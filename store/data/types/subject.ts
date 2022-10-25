import { isRecordWithKeysOfStringValues } from "~/utils"

export interface RawSubjectData {
  id: string
  title: string
  professor: string
  specs: string
  color: string
}

export function isRawSubjectData(data: unknown): data is RawSubjectData {
  return isRecordWithKeysOfStringValues<keyof RawSubjectData>(data, ["id", "title", "professor", "specs", "color"])
}

export interface SubjectData {
  id: string
  title: string
  professor: string
  specs: string[]
  color: string
}
