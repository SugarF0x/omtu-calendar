import { describe, expect, it } from "vitest"
import { isRecordWithKeys } from "~/utils"

describe('isRecordWithKeys', <T extends string,>() => {
  it.each<[Record<string, unknown>, Array<string>]>([
    [{ a: 123 }, ['a']],
    [{ a: 1, b: 2, c: 3 }, ['a', 'b', 'c']],
    [{ 'only-i-need-validation': true, 'i-will-be-omitted': false }, ['only-i-need-validation']]
  ])('should validate proper input %#', (object, keys) => {
    expect(isRecordWithKeys(object, keys)).toBeTruthy()
  })

  it.each<unknown>([
    null,
    undefined,
    123,
    'asdad',
    false,
    []
  ])("should invalidate malformed input %#", (input) => {
    expect(isRecordWithKeys(input, [])).not.toBeTruthy()
  })

  it.each<[Record<string, unknown>, Array<string>]>([
    [{ a: 123 }, ['a', 'b']],
    [{ a: 123, c: 231 }, ['a', 'b', 'c']],
    [{}, ['g']]
  ])("should invalidate records with missing specified keys %#", (object, keys) => {
    expect(isRecordWithKeys(object, keys)).not.toBeTruthy()
  })
})
