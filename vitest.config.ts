import { resolve } from 'path'
import fs from 'fs'
import { defineConfig } from 'vitest/config'

/**
 * Feature film "Snatched"
 * https://github.com/nuxt/framework/discussions/5379#discussioncomment-2942984
 */

function sanitizeNuxtTsConfigJson(config: string) {
  const regexp = /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g
  return config.replace(regexp, (m, g) => g ? '' : m)
}

const NuxtTsConfig = fs.readFileSync('./.nuxt/tsconfig.json').toString()
const tsConfigFormated = JSON.parse(sanitizeNuxtTsConfigJson(NuxtTsConfig))

export const alias: Record<string, string> = {}

const NuxtPathPairs: Array<[string, string[]]> = Object.entries(tsConfigFormated.compilerOptions.paths)
for (const [key, value] of NuxtPathPairs) {
  alias[key] = resolve(__dirname, value[0])
}

export default defineConfig({
  test: {
    deps: {
      inline: [/@nuxt\/test-utils-edge/]
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
    }
  },
  resolve: {
    alias
  }
})
