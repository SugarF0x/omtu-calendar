const plainError = (e: unknown) => {
  return typeof e === 'string' && e ? e : 'Unknown Error'
}

const isErrorObject = (e: unknown): e is { message: unknown } => {
  if (e === undefined || e === null) return false
  return Object.prototype.hasOwnProperty.call(e, 'message')
}

export const isError = (e: unknown): e is Error => {
  return e instanceof Error
}

export const toError = (e: unknown): Error => {
  if (isError(e)) return e
  const message = isErrorObject(e) && e.message ? String(e.message) : plainError(e)
  return new Error(message)
}
