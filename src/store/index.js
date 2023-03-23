import { createStore } from 'vuex'

export default createStore({
  state: { // 創造狀態 跟改值的動作
    statusS: false, // 創造狀態
    statusA: false,
    statusV: 0,
    testNum: 0
  },
  getters: {
    statusV: (state) => state.statusV // 可以 return 狀態
  },
  mutations: { // 更改status值 傳給computed
    setStatus (state, payload) {
      state.statusS = payload
      console.log('mt', payload)
    },
    setStatusA (state, payload) {
      state.statusA = payload
    },
    setNum (state, payload) {
      state.testNum = payload
    }
  },
  actions: { // 外層傳值進來
    getStatus (context, payload) {
      console.log('pay', payload)
      context.commit('setStatus', payload)
    },
    getStatusA (context, payload) {
      context.commit('setStatusA', payload)
    },
    getNum (context, payload) {
      console.log('pay', payload)
      context.commit('setNum', payload)
    }
  },
  modules: {
  }
})
