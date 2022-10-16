import { isRecordWithKeysOfStringValues } from "~/utils"

export interface ClassData {
  id: string
  subjectId: string
  groups: string
  time: string
  room: string
  note: string
  dates: string
}

export function isClassData(data: unknown): data is ClassData {
  return isRecordWithKeysOfStringValues<keyof ClassData>(data, ["id", "subjectId", "groups", "time", "room", "note", "dates"])
}
