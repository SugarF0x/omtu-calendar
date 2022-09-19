function plainError(e: unknown): string {
  return typeof e === 'string' && e ? e : 'Unknown Error'
}

function isErrorObject(e: unknown): e is { message: unknown } {
  if (e === undefined || e === null) return false
  return Object.prototype.hasOwnProperty.call(e, 'message')
}

export function isError(e: unknown): e is Error {
  return e instanceof Error
}

export function toError(e: unknown): Error {
  if (isError(e)) return e
  const message = isErrorObject(e) && e.message ? String(e.message) : plainError(e)
  return new Error(message)
}
