export interface EnvState {
  isDev: boolean
  tables: {
    1: string
    2: string
  }
}

export const defaultState = (): EnvState => ({
  isDev: false,
  tables: {
    1: '',
    2: ''
  }
})

export const state = () => defaultState()

export default state
