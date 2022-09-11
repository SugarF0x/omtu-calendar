import { describe, expect, it } from "vitest"
import { DirtyRow, Row } from "~/utils/googleSheetParser/types"
import { sanitizeRow } from "~/utils/googleSheetParser/helpers"

describe('sanitizeRow', () => {
  it("should remove all nulls", () => {
    const input: DirtyRow = {
      c: [
        { v: null },
        null,
        { v: 'value to be preserved A' },
        null,
        null,
        { v: 'value to be preserved B' },
        null,
        { v: null },
        { v: null },
      ]
    }

    const output: Row = {
      c: [
        { v: 'value to be preserved A' },
        { v: 'value to be preserved B' },
      ]
    }

    expect(sanitizeRow(input)).toEqual(output)
  })
})
