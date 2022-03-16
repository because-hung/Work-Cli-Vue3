<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
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

const Ary = [1, 2, 3, 4, 5]

Ary.splice(2, 1, 6)

// 1, 2, 6, 4, 5
console.log(Ary)

// filter
const aryId = [
  {
    id: 120258,
    name: 'one'
  },
  {
    id: 145885,
    name: 'two'
  },
  {
    id: 123586,
    name: 'three'
  },
  {
    id: 125546,
    name: 'four'
  }]

const aryA = [
  {
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
  },
  {
    id: 145885,
    food: 'papaya',
    name: 'TTT',
    num: 25
  },
  {
    id: 125585,
    food: 'apple',
    name: 'WCgC',
    num: 8
  }
]

const aryB = aryA.filter((item) => {
  return item.num > 9
})
console.log(aryB)
aryB.forEach((el) => {
  aryId.forEach(it => {
    if (el.id === it.id) {
      console.log('match', it)
      aryA.splice(aryA.indexOf(el), 1, it)
      aryB.splice(aryB.indexOf(el), 1)
    }
  })
})
console.log('a', aryA)
console.log('b', aryB)

aryA.forEach(ita => {
  aryB.forEach(itb => {
    if (ita.id === itb.id) {
      console.log(itb)
      console.log(aryA)
      aryA.splice(aryA.indexOf(ita), 1)
    }
  })
})
console.log(aryA)
</script>
