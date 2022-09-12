import { describe, expect, it } from "vitest"
import { isClassRawData } from "~/store/events"

describe('isClassRawData', () => {
  it('should validate proper input', () => {
    expect(isClassRawData({
      id: "",
      subjectId: "",
      groups: "",
      time: "",
      room: "",
      note: "",
      dates: ""
    })).toBeTruthy()
  })

  it("should invalidate malformed input", () => {
    expect(isClassRawData({
      id: "",
      subjectId: "",
      room: "",
      note: "",
    })).not.toBeTruthy()
  })
})
