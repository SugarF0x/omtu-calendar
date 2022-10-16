import { describe, expect, it } from "vitest"
import { isClassData } from "~/store/data/types"

describe('isClassData', () => {
  it('should validate proper input', () => {
    expect(isClassData({
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
    expect(isClassData({
      id: "",
      subjectId: "",
      room: "",
      note: "",
    })).not.toBeTruthy()
  })
})
