<template>
  <div class="hello">
    <testA></testA>
    <h2>status => {{ statusX }}</h2>
    <h2>true 1 / false 2</h2>
    {{ num }}
    <h2>paramet</h2>
    <button @click="changeEvent(true)">TTT</button>
    <button @click="changeEvent(false)">FFF</button>
    <h2>brother</h2>
    <router-link to="./testb">bro</router-link>

    <h1>main test rebase</h1>
    <h2>main test rebase2</h2>
    <h2>tg1</h2>

  </div>
</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import testA from './testA.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    testA
  },
  setup () {
    const localVable = localStorage.getItem('ccc')
    console.log('local', localVable)
    const store = useStore()
    console.log('vx', store.state.statusS)
    const changeEvent = (aaa) => {
      store.dispatch('getStatus', aaa)
    }
    const sayHi = () => {
      console.log('watch work')
    }
    const statusX = computed(() => store.state.statusS) // computed 取 vuex state值 -- 也可以換成 store.getters.statusV
    const num = computed(() => { // 有statusX 值 做 computed 判斷
      let result = 0
      console.log('.value', statusX.value)
      statusX.value === true ? result = 1 : result = 2

      return result
    })
    watch(num, () => {
      sayHi()
    })
    return {
      changeEvent,
      num,
      statusX
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
