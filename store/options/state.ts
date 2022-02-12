export interface OptionsState {
  group: number | null
  course: number | null
  specialties: string[]
}

export const defaultState = (): OptionsState => ({
  group: null,
  course: null,
  specialties: [],
})

export const state = () => defaultState()

export default state
