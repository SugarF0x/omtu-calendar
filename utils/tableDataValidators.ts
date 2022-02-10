import { RawSubject, RawEvent, RawSpecialty } from "~/types"

function isOfStringType(val: unknown): val is string {
  return typeof val === 'string'
}

function isNotEmptyString(val: string): boolean {
  return val !== ''
}

function getValidator<T>(entries: number) {
  return function(entry: T) {
    const values = Object.values(entry)

    return [
      values.length === entries,
      values.every(isOfStringType),
      values.every(isNotEmptyString)
    ].every(Boolean)
  }
}

export const validateSpecialty = getValidator<RawSpecialty>(2)
export const validateSubject = getValidator<RawSubject>(5)
export const validateEvent = getValidator<RawEvent>(7)
