<template>
  <div>
    <input type="value" v-model="randomVal"><br>
    <button class="btn" @click="getResult()">click me</button>
    <button class="btn" @click="getReset">reset</button>
    <ul>
      <li v-for="(num, i) in data.column" :key="i" :class="{'same': i+1 == num}">{{i + 1}} 號 ----- 送給 ----- {{num}} 號</li>
    </ul>
  </div>
</template>
<script>
import api from '../../api/list.json'
import { reactive, ref } from '@vue/reactivity'
export default {
  setup () {
    const data = reactive({
      column: []
    })

    const datalist = ref(api)

    console.log(datalist.value)
    const dataA = ref([])
    const dataB = ref([])
    const randomVal = ref(0)

    datalist.value.forEach(el => {
      el.teams === 'B' ? dataB.value.push(el) : dataA.value.push(el)
    })
    console.log('teamA', dataA.value)
    console.log('teamB', dataB.value)
    function getRandom () {
      return Math.floor(Math.random() * randomVal.value) + 1
    }
    function getResult () {
      let num = 1
      for (var i = 0; data.column.length < randomVal.value; i++) {
        const a = getRandom()
        if (!data.column.includes(a)) {
          console.log(`result: ${num} : ${a}`)
          data.column.push(a)
          num++
        }
      }
    }
    function getReset () {
      data.column.length = 0
    }

    return {
      getRandom,
      getResult,
      getReset,
      data,
      randomVal
    }
  }
}
</script>
<style lang="scss" scoped>
.btn{
    width: 100px;
    height: 100px;
    background-color: gray;
    color: white;
    margin: 10px;
}

ul{
  padding: 20px;
  border: 1px solid black;
  margin-top: 50px;
  li{
  font-size: 30px;
}
}

.same{
  color: red;
  font-weight: 700;
  font-size: 42px;
}

input{
  border: 1px solid black;
  margin: 20px;
  padding: 3px;
  padding-left: 10px;
}
</style>
