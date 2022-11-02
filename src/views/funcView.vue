<template>
  <div>
    <button class="btn" @click="getResult">click me</button>
    <button class="btn" @click="reset">reset</button>
    <ul>
      <li v-for="(num, i) in data.column" :key="i" :class="{'same': i+1 == num}">{{i + 1}} 號 ----- 送給 ----- {{num}} 號</li>
    </ul>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
export default {
  setup () {
    function getRandom () {
      return Math.floor(Math.random() * 200) + 1
    }
    function getResult () {
      let num = 1
      for (var i = 0; data.column.length < 200; i++) {
        const a = getRandom()
        if (!data.column.includes(a)) {
          console.log(`result: ${num} : ${a}`)
          data.column.push(a)
          num++
        }
      }
    }
    function reset () {
      data.column.length = 0
    }

    const data = reactive({
      column: []
    })

    return {
      getRandom,
      getResult,
      reset,
      data
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
</style>
