import { describe, it, expect } from "vitest"
import { isCol } from "~/utils/googleSheetParser/types"

describe('isCol', () => {
  it('should validate proper input', () => {
    expect(isCol({
      id: "awefasefwef",
      label: "",
      type: "string"
    })).toBeTruthy()
  })

  it.each([
    {},
    { id: "" },
    { label: "", type: "" },
    {
      id: 1,
      label: "",
      type: "string",
    },
    {
      id: "",
      label: 1,
      type: "string",
    },
    {
      id: "",
      label: "",
      type: "string asdasd",
    },
  ])('should invalidate malformed input %#', (input) => {
    expect(isCol(input)).not.toBeTruthy()
  })
})
