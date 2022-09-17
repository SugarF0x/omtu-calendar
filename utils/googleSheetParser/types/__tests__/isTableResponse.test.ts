import { describe, expect, it } from "vitest"
import { isTableRawResponse, TableParsedResponse } from "~/utils/googleSheetParser/types"

const TABLE_MOCK_RESPONSE: TableParsedResponse = {
  reqId: 'asd',
  sig: 'awda',
  status: 'awda',
  table: {
    cols: [{ id: '123', label: "", type: "string" }],
    rows: [{ c: [ { v: 'awd' } ] }],
    parsedNumHeaders: 20
  },
  version: 'awd'
}

const T = TABLE_MOCK_RESPONSE

function removeKey<T extends Record<string, any>, K extends keyof T>(obj: T, key: K): Omit<T, K> {
  const res = { ...obj }
  delete res[key]
  return res
}

describe('isTableResponse', () => {
  it('should validate proper input', () => {
    expect(isTableRawResponse(T)).toBeTruthy()
  })

  describe("should invalidate input on", () => {
    it.each<unknown>([
      { ...T, reqId: null },
      { ...T, sig: 13 },
      { ...T, status: [] },
      { ...T, version: {} },
      { ...T, table: [] },
      { ...T, table: null },
    ])("mistyped root level keys %#", (input) => {
      expect(isTableRawResponse(input)).not.toBeTruthy()
    })

    it("missing table key", () => {
      expect(isTableRawResponse(removeKey(T, 'table'))).not.toBeTruthy()
    })

    it.each<keyof TableParsedResponse['table']>([
      'cols',
      'rows',
      'parsedNumHeaders'
    ])("missing table keys: %s", (key) => {
      expect(isTableRawResponse({ ...T, table: removeKey(T.table, key) })).not.toBeTruthy()
    })

    it.each<unknown>([
      { ...T, table: { ...T.table, cols: null } },
      { ...T, table: { ...T.table, cols: 123 } },
      { ...T, table: { ...T.table, cols: "asd" } },
      { ...T, table: { ...T.table, cols: {} } },
      { ...T, table: { ...T.table, rows: null } },
      { ...T, table: { ...T.table, rows: 123 } },
      { ...T, table: { ...T.table, rows: "asd" } },
      { ...T, table: { ...T.table, rows: {} } },
      { ...T, table: { ...T.table, parsedNumHeaders: null } },
      { ...T, table: { ...T.table, parsedNumHeaders: "asd" } },
      { ...T, table: { ...T.table, parsedNumHeaders: {} } },
      { ...T, table: { ...T.table, parsedNumHeaders: [] } },
    ])("mistyped table keys %#", (input) => {
      expect(isTableRawResponse(input)).not.toBeTruthy()
    })

    it.each<unknown>([
      { ...T, table: { ...T.table, cols: [{ id: '123', label: "aoejsf", type: "string" }] } },
      { ...T, table: { ...T.table, cols: [{ id: '123', label: "", type: "asdwdwa" }] } },
      { ...T, table: { ...T.table, cols: [{ id: 123123, label: 12312, type: { foo: ['bar'] } }] } },
    ])("mistyped table cols %#", (input) => {
      expect(isTableRawResponse(input)).not.toBeTruthy()
    })

    it.each<unknown>([
      { ...T, table: { ...T.table, rows: [{ c: [ { a: 'foo' } ] }] } },
      { ...T, table: { ...T.table, rows: [{ c: [ 'bar' ] }] } },
      { ...T, table: { ...T.table, rows: [{ c: 123 }] } },
    ])("mistyped table rows %#", (input) => {
      expect(isTableRawResponse(input)).not.toBeTruthy()
    })
  })
})
