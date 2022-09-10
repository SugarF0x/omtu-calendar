export function isStringRecord(object: unknown): object is Record<string, string> {
  if (!object) return false
  if (typeof object !== 'object') return false
  return Object.values(object).every(value => typeof value === 'string')
}
