<template>
<h2>brother</h2>
   <button @click="changeEve(true)">BBBTTT</button>
   <div class="box">
  <h2>before</h2>
    <ul>
        <slot name="item" v-for="item in deta"  :text="item.name"></slot>
    </ul>
   </div>
  <div class="box">
   <h2>after</h2>
  </div>
   <!-- <button @click="changeEve(false)">BBBFFF</button>
    <h2>vx:{{store.state.statusS}}</h2>
    <h3>test git</h3>
    <h3>test git2</h3>
    <h3>test git3</h3>-->
</template>
<script>
import { reactive } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  props: {
    deta: Array
  },
  setup () {
    const store = useStore()
    const changeEve = (ccc) => {
      store.dispatch('getStatus', ccc)
      localStorage.setItem('ccc', ccc)
    }

    const CCC = reactive({
      id: '10',
      name: 'tom'
    })

    const AAA = reactive(JSON.parse(JSON.stringify(CCC)))
    console.log('cc', CCC)
    console.log('aaa', AAA)
    return {
      changeEve
    }
  }
}
</script>
