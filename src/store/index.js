import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isEnlarge: true
  },
  getters: {
  },
  mutations: {
    setIsEnlarge: (state,info) => {
      state.isEnlarge = info
    }
  },
  actions: {
  },
  modules: {
  }
})
