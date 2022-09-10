import { isRecordWithKeysOfStringValues } from "~/utils"

export interface SubjectRawData {
  id: string
  title: string
  professor: string
  specs: string
  color: string
}

export function isSubjectRawData(data: unknown): data is SubjectRawData {
  return isRecordWithKeysOfStringValues<keyof SubjectRawData>(data, ["id", "title", "professor", "specs", "color"])
}
