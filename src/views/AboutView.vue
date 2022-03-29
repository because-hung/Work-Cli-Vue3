<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
// import axios from 'axios'
import { fetchFakeApi } from '../../api/fakeApi'

const data = ref([])

onMounted(() => {
  fetchFakeApi().then((res) => {
    console.log('res', res)
    data.value = res.data.columns
  })
})

console.log('ref data', data.value)

// restart
// const date = Date.now()
// const today = new Date(date)
// console.log(today)

// const enDate = Date.parse(new Date('2012/05/17 09:20'))
// const twDate = Date.parse(new Date('2012/05/16 10:00'))
// console.log(enDate)
// console.log(twDate)
// const x = enDate - twDate
// console.log(x / 60 / 60 / 1000)

// const aryA = [
//   [{
//     id: 123586,
//     food: 'banana',
//     name: 'Wang',
//     num: 10
//   },
//   {
//     id: 126385,
//     food: 'mmmana',
//     name: 'watermenlon',
//     num: 37
//   }],
//   [{
//     id: 358446,
//     food: 'anaddna',
//     name: 'Wadddng',
//     num: 14
//   },
//   {
//     id: 126225,
//     food: 'mmmana',
//     name: 'watnlon',
//     num: 34
//   }],
//   [{
//     id: 1257776,
//     food: 'bana',
//     name: 'ng',
//     num: 144
//   },
//   {
//     id: 1263448,
//     food: 'mmmana',
//     name: 'watermenlon',
//     num: 377
//   }],
//   [{
//     id: 125644,
//     food: 'ban',
//     name: 'Wg',
//     num: 14
//   },
//   {
//     id: 126555,
//     food: 'mna',
//     name: 'wrmenlon',
//     num: 55
//   }]
// ]

// console.log(aryA)
// let bbb = []

// aryA.forEach((item) => {
//   console.log(item)
//   bbb = bbb.concat(item)
//   console.log(bbb)
// })

const dayjs = require('dayjs')

const timeA = dayjs()
console.log(timeA)
// const timeB = dayjs().add(1, 'day')
// console.log(timeB)
// console.log(timeB - timeA) // 減法
// console.log(dayjs('2022-03-18T00:49:49+08:00')) // date
// console.log(dayjs()) // now
// console.log(dayjs().format()) // format

// const timeC = dayjs().format()
// console.log(timeC)
// console.log(dayjs(timeA.format()))

// restart

// const startTime = dayjs()
// let count = 0

// function getApi () {
//   console.log('123')
//   axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => { console.log(res.data) })
//     .catch((error) => { console.error(error) })
// }

// getApi()

// setInterval(() => getApi(), 30000)

// const fixed = () => {
//   count++
//   const aaa = (dayjs() - (startTime + count * 1000))
//   console.log(aaa)
//   let nextTime = 1000 - aaa
//   if (aaa < 0) {
//     nextTime = 0
//   }
//   setTimeout(fixed, nextTime)
// }
// setTimeout(fixed, 1000)
</script>
