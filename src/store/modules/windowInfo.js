const windowInfo = {
  state: {
    seeTimes: 0
  },
  mutations: {
    CHANGE_NUMBER (state, payload = {}) {
      state.seeTimes++
      console.log('参数', state)
    }
  },
  actions: {
    change_number ({ state, commit }, params) {
      commit('CHANGE_NUMBER', params)
    }
  },
  getters: {}
}

export default windowInfo
