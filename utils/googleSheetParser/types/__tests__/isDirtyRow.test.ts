import { describe, expect, it } from "vitest"
import { DirtyRow, isDirtyRow } from "~/utils/googleSheetParser/types"

describe('isDirtyRow', () => {
  it('should validate proper input', () => {
    const row: DirtyRow = {
      c: [
        null,
        null,
        { v: 'asd' },
        { v: null },
        null,
        { v: 'dsda' },
        null
      ]
    }

    expect(isDirtyRow(row)).toBeTruthy()
  })

  it.each<unknown>([
    null,
    undefined,
    123,
    "321",
    [],
    {},
    { abs: 123 },
    { c: 3232 },
    { c: 'asdadw' },
    { c: ['awdwad'] },
    { c: [12321] },
    { c: [ { } ] },
    { c: [ { adawd: 123 } ] },
    { c: [ { adawd: 'asdasd' } ] },
    { c: [ { v: 123123 } ] },
    { c: [ { v: {} } ] },
  ])('should invalidate malformed input %#', (input) => {
    expect(isDirtyRow(input)).not.toBeTruthy()
  })
})
