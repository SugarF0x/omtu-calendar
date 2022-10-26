import { describe, expect, it } from "vitest"
import { isSpecialtyData } from "~/store/data/types"

describe('isSpecialtyData', () => {
  it('should validate proper input', () => {
    expect(isSpecialtyData({
      id: "",
      title: ""
    })).toBeTruthy()
  })

  it.each([
    { id: "" },
    { title: "" },
    {},
    { id: 1, title: "" }
  ])("should invalidate malformed input %#", (input) => {
    expect(isSpecialtyData(input)).not.toBeTruthy()
  })
})
