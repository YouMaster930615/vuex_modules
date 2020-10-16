import Vue from 'vue'
import Vuex from 'vuex'
import windowInfo from './modules/windowInfo'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex: '南君'
  },
  mutations: {
  },
  actions: {
  },
  getters,
  modules: {
    // 模块注册
    windowInfo
  }
})
