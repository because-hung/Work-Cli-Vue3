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

</script>
