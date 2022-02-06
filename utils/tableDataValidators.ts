import { RawAmendmentEntry, RawCoreEntry, RawSpecialtyEntry } from "~/types"

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

export const validateSpecialty = getValidator<RawSpecialtyEntry>(2)
export const validateCoreEntry = getValidator<RawCoreEntry>(12)
export const validateAmendment = getValidator<RawAmendmentEntry>(6)
