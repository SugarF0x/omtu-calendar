import { startOfMonth } from "date-fns"

export interface Options {
  group: number | null
  course: number | null
  specialties: string[]
  date: string
}

const defaultOptions: Options = {
  group: null,
  course: 1,
  specialties: [],
  date: startOfMonth(new Date()).toISOString(),
}

export function loadCachedOptions(): Options {
  const storedString = localStorage.getItem("options")
  if (storedString)
    return {
      ...defaultOptions,
      ...JSON.parse(storedString),
    }

  localStorage.setItem("options", JSON.stringify(defaultOptions))
  return defaultOptions
}

export function cacheOptions(options: Options) {
  localStorage.setItem("options", JSON.stringify(options))
}

export function clearCachedOptions() {
  localStorage.removeItem('options')
}
