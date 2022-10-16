import { describe, expect, it } from "vitest"
import { isSubjectRawData } from "~/store/data"

describe('isSubjectRawData', () => {
  it('should validate proper input', () => {
    expect(isSubjectRawData({
      id: "",
      title: "",
      professor: "",
      specs: "",
      color: "",
    })).toBeTruthy()
  })

  it.each([
    {},
    { id: "" },
    { specs: "", color: "" },
    {
      id: 1,
      title: "",
      professor: "",
      specs: "",
      color: "",
    }
  ])('should invalidate malformed input %#', (input) => {
    expect(isSubjectRawData(input)).not.toBeTruthy()
  })
})
