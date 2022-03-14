<template>
<h2>son</h2>
<input type="text" v-model="txt">
<h2>OG:{{ txt }}</h2>
<h2>RE:{{ rmTxt }}</h2>
<h2>money</h2>
 <p>假設 1 美元 = 30 台幣</p>
  <p>美元
    <input v-model.number="usd" type="number" />
  </p>
  <p>新台幣
    <input v-model.number="twd" type="number" />
  </p>
<button @click="changeStatus(true)">enterT</button>
<button @click="changeStatus(false)">enterf</button>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, ref, watch, reactive, readonly, watchEffect } from 'vue'
const store = useStore()
const changeStatus = (bbb) => {
  store.dispatch('getStatus', bbb)
  localStorage.setItem('ccc', bbb)
}

// restart
//  getfocus(e) {
//     console.log(e);
//     if (this.stared.indexOf(e) === -1) {
//       this.stared.push(e);
//     } else {
//       this.stared.splice(this.stared.indexOf(e), 1);
//     }

//     //先去搜尋關注名單裡面有沒有這筆資料
//   }

const txt = ref('')
const usd = ref(1)

const rmTxt = computed(() => {
  return txt.value.split('').reverse().join('')
})

const twd = computed({
  get () {
    return usd.value * 30
  },
  set (newVal) {
    usd.value = newVal / 30
  }
})

// 監聽一個 getter 函式
const state = reactive({ count: 3 })

watch(
  () => state.count,
  (newVal, oldVal) => {
    newVal = newVal * 2 + 2
    console.log('RE-newVal', newVal)
    console.log('RE-oldVal', oldVal)
  }
)

// 監聽一個 ref
const count = ref(0)
watch(count, (newVal, oldVal) => {
  console.log('F-newVal', newVal)
  console.log('F-oldVal', oldVal)
})

watchEffect(() => {
  state.count += 3
  console.log('st', state.count)
  console.log('cc', count)
})

setTimeout(() => {
  count.value = 1
  state.count = 4
}, 2000)

const ogNumber = reactive({ count: 5 })
const copy = readonly(ogNumber)
watchEffect(() => {
  console.log('eft', copy.count)
})

ogNumber.count++
console.log('ogN', ogNumber.count)

copy.count++
</script>
