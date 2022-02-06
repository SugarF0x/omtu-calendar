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
      options: state.options
    })
  }).plugin(store);
}

function migrate(state) {
  switch (state.version) {
    default: return state
  }
}
