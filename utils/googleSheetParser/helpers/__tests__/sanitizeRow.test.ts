import { describe, expect, it } from "vitest"
import { DirtyRow, Row } from "~/utils/googleSheetParser/types"
import { sanitizeRow } from "~/utils/googleSheetParser/helpers"

describe('sanitizeRow', () => {
  it.each<[DirtyRow, Row]>([
    [
      {
        c: [
          null,
          null,
          { v: 'one value among the nulls' },
          null
        ]
      },
      {
        c: [
          { v: 'one value among the nulls' }
        ]
      }
    ],

    [
      {
        c: [
          { v: null },
          { v: 'a value among null values' },
          { v: null },
          { v: null }
        ]
      },
      {
        c: [
          { v: 'a value among null values' },
        ]
      }
    ],

    [
      {
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
      },
      {
        c: [
          { v: 'value to be preserved A' },
          { v: 'value to be preserved B' },
        ]
      }
    ]
  ])("should remove all nulls %#", (input, output) => {
    expect(sanitizeRow(input)).toEqual(output)
  })
})
