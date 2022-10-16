import { describe, expect, it } from "vitest"
import { parseSpreadsheetRawData } from "~/utils/googleSheetParser/helpers"
import {
  EXPECTED_CLASSES_RESULT,
  EXPECTED_SPECIALTIES_RESULT,
  EXPECTED_SUBJECTS_RESULT,
  MOCK_CLASSES_DATA,
  MOCK_SPECIALTIES_DATA,
  MOCK_SUBJECTS_DATA,
} from './mocks'
import { isClassRawData, isSpecialtyRawData, isSubjectRawData } from "~/store/data"
import { isError } from "~/utils"

function dummyValidator(e: unknown): e is Record<string, string> {
  return false
}

describe('parseSpreadsheetRawData', () => {
  it.each<[string, string, unknown, (data: unknown) => data is any]>([
    ['specialties', MOCK_SPECIALTIES_DATA, EXPECTED_SPECIALTIES_RESULT, isSpecialtyRawData],
    ['subjects', MOCK_SUBJECTS_DATA, EXPECTED_SUBJECTS_RESULT, isSubjectRawData],
    ['classes', MOCK_CLASSES_DATA, EXPECTED_CLASSES_RESULT, isClassRawData],
  ])("should properly parse %s", (_, input, output, validator) => {
    expect(parseSpreadsheetRawData(input, validator)).toEqual(output)
  })

  it("should return error on malformed json", () => {
    expect(isError(parseSpreadsheetRawData(';soitgs;erugsu;erugksgergriuug;', dummyValidator))).toBeTruthy()
  })

  it("should return error on malformed table interface", () => {
    const data = `/*O_o*/\ngoogle.visualization.Query.setResponse({"i-am":"not what is expected"});`

    expect(parseSpreadsheetRawData(data, dummyValidator)).toEqual(new Error('Malformed data received: table response does not match type guard'))
  })

  it("should return error on failed type guard", () => {
    expect(parseSpreadsheetRawData(MOCK_SPECIALTIES_DATA, dummyValidator)).toEqual(new Error('Malformed data received: row entry does not match type guard'))
  })
})
