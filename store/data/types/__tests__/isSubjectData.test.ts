import { describe, expect, it } from "vitest"
import { isSubjectData } from "~/store/data/types"

describe('isSubjectData', () => {
  it('should validate proper input', () => {
    expect(isSubjectData({
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
    expect(isSubjectData(input)).not.toBeTruthy()
  })
})
