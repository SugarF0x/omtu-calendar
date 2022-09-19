import { describe, expect, it } from "vitest"
import { isError, toError } from "~/utils"

describe('isError', () => {
  it('should validate proper input', () => {
    expect(isError(new Error())).toBeTruthy()
  })

  it.each<unknown>([
    undefined,
    null,
    false,
    1,
    'asd',
    [],
    {}
  ])('should invalidate improper input %#', (input) => {
    expect(isError(input)).not.toBeTruthy()
  })
})

describe('toError', () => {
  it.each<[unknown, Error]>([
    ['i am an error message', new Error('i am an error message')],
    [1321312, new Error('Unknown Error')],
    [new Error('foo'), new Error('foo')],
    [{ message: 'i am an error object' }, new Error('i am an error object')]
  ])('should convert given data into Error instance %#', (input, output) => {
    expect(toError(input)).toEqual(output)
  })
})
