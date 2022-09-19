import { describe, it, expect } from "vitest"
import { isRecordWithKeysOfStringValues } from "~/utils"

describe('isRecordWithKeysOfStringValues', () => {
  it.each<[Record<string, unknown>, Array<string>]>([
    [{}, []],
    [{ key: 'value' }, ['key']],
    [{ foo: 'foo', bar: 'bar', baz: 'baz' }, ['foo', 'bar', 'baz']],
    [{ foo: 'foo', bar: 'bar', baz: 'baz' }, ['foo', 'bar']],
    [{ foo: 'foo', bar: 'bar', baz: 'baz' }, ['bar']],
    [{ foo: 'foo', bar: 'bar', baz: 'baz' }, ['baz']],
  ])('should validate proper input %#', (object, keys) => {
    expect(isRecordWithKeysOfStringValues(object, keys)).toBeTruthy()
  })

  it.each<[Record<string, unknown>, Array<string>]>([
    [{ foo: 'foo', bar: 123, baz: {} }, ['foo']],
    [{ foo: 321, bar: 'bar', baz: false }, ['bar']],
    [{ foo: [1,2,3], baz: 'baz' }, ['baz']],
    [{ foo: null, bar: 'bar', baz: 'baz' }, ['bar', 'baz']],
  ])("should validate with other keys in object even if they are not strings %#", (object, keys) => {
    expect(isRecordWithKeysOfStringValues(object, keys)).toBeTruthy()
  })

  it.each<[unknown, Array<string>]>([
    [null, []],
    [undefined, []],
    [[], []],
    [{}, ['foo']],
    [{ foo: 'foo' }, ['bar']],
    [{ foo: ['i am not a string'] }, ['foo']],
    [{ foo: 123 }, ['foo']],
    [{ foo: { and: 'neither am i' } }, ['foo']],
  ])("should invalidate on non string type key values %#", (object, keys) => {
    expect(isRecordWithKeysOfStringValues(object, keys)).not.toBeTruthy()
  })
})
