import { describe, expect, it } from "vitest"
import { isSpecialtyRawData } from "~/store/events"

describe('isSpecialtyRawData', () => {
  it('should validate proper input', () => {
    expect(isSpecialtyRawData({
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
    expect(isSpecialtyRawData(input)).not.toBeTruthy()
  })
})
