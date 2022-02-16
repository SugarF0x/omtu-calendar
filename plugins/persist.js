import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    restoreState: (key, store) => {
      const rawState = store?.getItem(key)
      if (!rawState) return {}

      const state = JSON.parse(rawState)
      return migrate(state)
    },
    reducer: (state) => ({
      version: state.version,
      data: state.data,
      options: state.options,
      env: state.env
    })
  }).plugin(store);
}

function migrate(state) {
  switch (state.version) {
    case 0: return migrate({
      version: 1,
      options: state.options
    })
    case 1: return migrate({
      ...state,
      version: 2,
      data: {
        ...state.data,
        sheets: {
          specialties: (state.data?.sheets?.specialties ?? []).map(entry => ({ ...entry, course: 1 })),
          subjects: (state.data?.sheets?.subjects ?? []).map(entry => ({ ...entry, course: 1 })),
          events: (state.data?.sheets?.events ?? []).map(entry => ({ ...entry, course: 1 }))
        }
      }
    })
    default: return state
  }
}
