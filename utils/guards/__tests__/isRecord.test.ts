import { describe, expect, it } from "vitest"
import { isRecord } from "~/utils"

describe('isRecord', () => {
  it('should validate any record', () => {
    expect(isRecord({})).toBeTruthy()
  })

  it.each<unknown>([
    null,
    undefined,
    [],
    123,
    false,
    "asdawds"
  ])("should invalidate anything that is not a record", (input) => {
    expect(isRecord(input)).not.toBeTruthy()
  })
})
