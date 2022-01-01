import { Specialty } from "~/types"

export interface Options {
  group: number | null
  course: number | null
  specialty: Specialty | null
}

const defaultOptions: Options = {
  group: null,
  course: null,
  specialty: null,
}

export function getOptions(): Options {
  const storedString = localStorage.getItem("options")
  if (storedString)
    return {
      ...defaultOptions,
      ...JSON.parse(storedString),
    }

  localStorage.setItem("options", JSON.stringify(defaultOptions))
  return defaultOptions
}

export function setOptions(options: Options) {
  localStorage.setItem("options", JSON.stringify(options))
}
