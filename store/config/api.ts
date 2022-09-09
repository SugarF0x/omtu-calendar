import { $fetch } from "ohmyfetch"
import { toError } from "~/utils"
import { Config } from "~/store"

const expectedKeys: Array<keyof Config> = ['sheetIds', 'dataRefetchInterval']

function isValidConfigResponse(response: unknown): response is Config {
  if (typeof response !== 'object') return false
  if (Object.keys(response).some((key: keyof Config) => !expectedKeys.includes(key))) return false
  const responseWithMatchedKeys = response as Config

  if (responseWithMatchedKeys.sheetIds.length !== 2) return false
  if (responseWithMatchedKeys.sheetIds.some(value => typeof value !== 'string')) return false

  // noinspection RedundantIfStatementJS
  if (typeof responseWithMatchedKeys.dataRefetchInterval !== 'number') return false

  return true
}

export async function fetchConfigRequest(): Promise<Config | Error> {
  try {
    const config = await $fetch('/config.json')
    if (!isValidConfigResponse(config)) return new Error('Fetched config does not match schema')
    return config
  } catch (error) {
    return toError(error)
  }
}
