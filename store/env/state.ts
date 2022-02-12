export interface EnvState {
  tables: {
    1: string
    2: string
  }
}

export const defaultState = (): EnvState => ({
  tables: {
    1: '1sTEvkTc0QIcec_AUjcflMijUau2fnwIyNnLZU-kcsgA',
    2: ''
  }
})

export const state = () => defaultState()

export default state
