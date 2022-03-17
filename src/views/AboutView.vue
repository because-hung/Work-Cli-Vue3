<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import axios from 'axios'
// restart
const date = Date.now()
const today = new Date(date)
console.log(today)

const enDate = Date.parse(new Date('2012/05/17 09:20'))
const twDate = Date.parse(new Date('2012/05/16 10:00'))
console.log(enDate)
console.log(twDate)
const x = enDate - twDate
console.log(x / 60 / 60 / 1000)

const aryA = [
  [{
    id: 123586,
    food: 'banana',
    name: 'Wang',
    num: 10
  },
  {
    id: 126385,
    food: 'mmmana',
    name: 'watermenlon',
    num: 37
  }],
  [{
    id: 358446,
    food: 'anaddna',
    name: 'Wadddng',
    num: 14
  },
  {
    id: 126225,
    food: 'mmmana',
    name: 'watnlon',
    num: 34
  }],
  [{
    id: 1257776,
    food: 'bana',
    name: 'ng',
    num: 144
  },
  {
    id: 1263448,
    food: 'mmmana',
    name: 'watermenlon',
    num: 377
  }],
  [{
    id: 125644,
    food: 'ban',
    name: 'Wg',
    num: 14
  },
  {
    id: 126555,
    food: 'mna',
    name: 'wrmenlon',
    num: 55
  }]
]

console.log(aryA)
let bbb = []

aryA.forEach((item) => {
  console.log(item)
  bbb = bbb.concat(item)
  console.log(bbb)
})

console.log(bbb)

var dayjs = require('dayjs')

const timeA = dayjs()
console.log(timeA)
const timeB = dayjs().add(1, 'day')
console.log(timeB)
console.log(timeB < timeA)

// restart

// async function getApi () {
//   const aab = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   return aab.data
// }

// const ccc = await getApi()
// console.log(ccc)

function getApi () {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}

const aaa = await getApi()
console.log(aaa)
</script>
