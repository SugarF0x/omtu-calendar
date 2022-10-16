import { isRecordWithKeysOfStringValues } from "~/utils"

export interface SubjectData {
  id: string
  title: string
  professor: string
  specs: string
  color: string
}

export function isSubjectData(data: unknown): data is SubjectData {
  return isRecordWithKeysOfStringValues<keyof SubjectData>(data, ["id", "title", "professor", "specs", "color"])
}
