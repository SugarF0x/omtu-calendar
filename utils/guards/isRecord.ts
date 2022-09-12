export function isRecord(object: unknown): object is Record<string, unknown> {
  if (!object) return false
  return !Array.isArray(object)
}
