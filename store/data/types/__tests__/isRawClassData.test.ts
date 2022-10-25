import { describe, expect, it } from "vitest"
import { isRawClassData } from "~/store/data/types"

describe('isRawClassData', () => {
  it('should validate proper input', () => {
    expect(isRawClassData({
      id: "",
      subjectId: "",
      groups: "",
      time: "",
      room: "",
      note: "",
      dates: ""
    })).toBeTruthy()
  })

  it.each([
    {},
    { id: "" },
    { subjectId: "", note: "" },
    {
      id: 2,
      subjectId: "",
      room: "",
      note: "",
    }
  ])("should invalidate malformed input %#", () => {
    expect(isRawClassData({
      id: "",
      subjectId: "",
      room: "",
      note: "",
    })).not.toBeTruthy()
  })
})
