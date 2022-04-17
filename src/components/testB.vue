<template >
<!-- <h2>brother</h2>
   <button @click="changeEve(true)">BBBTTT</button>
   <div class="box">
  <h2>before</h2>
    <ul>
        <slot name="item" v-for="item in deta"  :text="item.name"></slot>
    </ul>
   </div>
  <div class="box">
   <h2>after</h2>
  </div> -->

  <h2>props watch</h2>
  <div class="box">
<ul v-if="deta">
  <li>it {{ deta[0] }} - <span ref="dataId">{{ deta[0] }}</span></li>
</ul>
  </div>
   <!-- <button @click="changeEve(false)">BBBFFF</button>
    <h2>vx:{{store.state.statusS}}</h2>
    <h3>test git</h3>
    <h3>test git2</h3>
    <h3>test git3</h3>-->
</template>
<script>
import { reactive, getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  props: {
    deta: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    //
    // <div v-for ="(num,i) in nums "
    //      :ref="(el)=>{ divs[i] = el }">{{num}}</div>
    //  onBeforeUpdate(()=>{
    //      divs.value =[]
    //    })
    const store = useStore()
    const { proxy } = getCurrentInstance()
    const changeEve = (ccc) => {
      store.dispatch('getStatus', ccc)
      localStorage.setItem('ccc', ccc)
    }

    onMounted(() => {
      const dataDom = proxy.$refs.dataId
      console.log(dataDom)
    })

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
