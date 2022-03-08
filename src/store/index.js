import { createStore } from 'vuex'

export default createStore({
  state: {
    statusS: false
  },
  mutations: {
    setStatus (state, payload) {
      state.statusS = payload
      console.log('mt', payload)
    }
  },
  actions: {
    getStatus (context, payload) {
      console.log('pay', payload)
      context.commit('setStatus', payload)
    }
  },
  modules: {
  }
})
