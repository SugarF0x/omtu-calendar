import { describe, expect, it } from "vitest"
import { isRawSubjectData } from "~/store/data/types"

describe('isRawSubjectData', () => {
  it('should validate proper input', () => {
    expect(isRawSubjectData({
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
    expect(isRawSubjectData(input)).not.toBeTruthy()
  })
})
