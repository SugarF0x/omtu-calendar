import { $fetch } from "ohmyfetch"
import { toError } from "~/utils"
import { Config } from "~/store"

const expectedKeys: Array<keyof Config> = ['sheetIds', 'dataRefetchInterval']

function isValidConfigResponse(response: unknown): response is Config {
  if (!response) return false
  if (typeof response !== 'object') return false
  if (Object.keys(response).some((key) => !expectedKeys.includes(key as keyof Config))) return false
  const responseWithMatchedKeys = response as Record<keyof Config, unknown>

  if (!Array.isArray(responseWithMatchedKeys.sheetIds)) return false
  if (responseWithMatchedKeys.sheetIds.length !== 2) return false
  if (responseWithMatchedKeys.sheetIds.some(value => typeof value !== 'string')) return false

  // noinspection RedundantIfStatementJS
  if (typeof responseWithMatchedKeys.dataRefetchInterval !== 'number') return false

  return true
}

export async function fetchConfigRequest(): Promise<Config | Error> {
  try {
    const config = (await $fetch('/config.json', { cache: 'no-store' }))
    if (!isValidConfigResponse(config)) return new Error('Fetched config does not match schema')
    return config
  } catch (error) {
    return toError(error)
  }
}
