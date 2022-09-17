import { describe, expect, it } from "vitest"
import { isStringRecord } from "~/utils"

describe('isStringRecord', () => {
  it('should validate proper input', () => {
    expect(isStringRecord({ foo: 'bar' })).toBeTruthy()
  })

  it("should validate empty object as well", () => {
    expect(isStringRecord({})).toBeTruthy()
  })

  it.each<unknown>([
    null,
    undefined,
    []
  ])("should invalidate improper input %#", (input) => {
    expect(isStringRecord(input)).not.toBeTruthy()
  })
})
