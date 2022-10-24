import { isRecordWithKeysOfStringValues } from "~/utils"

export interface RawClassData {
  id: string
  subjectId: string
  groups: string
  time: string
  room: string
  note: string
  dates: string
}

export function isRawClassData(data: unknown): data is RawClassData {
  return isRecordWithKeysOfStringValues<keyof RawClassData>(data, ["id", "subjectId", "groups", "time", "room", "note", "dates"])
}

export interface ClassData {
  id: string
  subjectId: string
  time: string
  room: string
  dates: string[]
  groups?: number[]
  note?: string
}
