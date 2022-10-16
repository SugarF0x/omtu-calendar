import { isRecordWithKeysOfStringValues } from "~/utils"

export interface ClassRawData {
  id: string
  subjectId: string
  groups: string
  time: string
  room: string
  note: string
  dates: string
}

export function isClassRawData(data: unknown): data is ClassRawData {
  return isRecordWithKeysOfStringValues<keyof ClassRawData>(data, ["id", "subjectId", "groups", "time", "room", "note", "dates"])
}
