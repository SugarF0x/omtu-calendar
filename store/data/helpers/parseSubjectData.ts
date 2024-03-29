import { RawSubjectData, SubjectData } from "~/store"

export function parseSubjectData(data: Array<RawSubjectData[]>): Array<SubjectData[]> {
  const result: Array<SubjectData[]> = []

  for (const [course, subjects] of Object.entries(data)) {
    result[Number(course)] = subjects.map<SubjectData>(subject => ({
      ...subject,
      professor: parseProfessor(subject.professor),
      specs: parseSpecs(subject.specs),
      color: parseColor(subject)
    }))
  }

  return result
}

function parseProfessor(professor: string): string | undefined {
  if (professor === '-') return undefined
  return professor
}

function parseSpecs(specs: string): string[] | undefined {
  if (specs === '-') return undefined
  return specs.split(',')
}

function parseColor(data: RawSubjectData): string {
  if (data.color === '-') return getColorFromText(data.title)
  return data.color
}

export function getColorFromText(value: string): string {
  let hash = 0

  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'
  for (let i = 0; i < 3; i++) {
    const hexValue = (hash >> (i * 8)) & 0xFF
    color += ('00' + hexValue.toString(16)).substr(-2)
  }

  return color;
}
