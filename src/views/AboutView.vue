<template>
<button @click="leftSide()">left home game</button>
<button @click="rightSide()">right away game</button>
<div v-if="anFlag > 0" class="alertGroup" :class="{ 'alertAn' : anFlag === 1, 'alertAntw' : anFlag === 2, '' : anFlag === 0 }">
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
</div>
  <div class="about">
    <ul v-for="(item, i) in data" :key="i">
      <li :id="`${item.name}`">{{ item.name }}</li>
      <li><iframe width="560" height="315" :src="item.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
    </ul>
    <h1>This is an about page</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y65kO3YcXFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div id="one" class="box">111</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae at sed consectetur nulla, saepe ut deleniti voluptatum magnam, libero, adipisci doloribus accusantium voluptas reiciendis distinctio officiis modi? At quas beatae vitae distinctio consectetur, ullam inventore assumenda voluptatum nemo id. Possimus corrupti perspiciatis in ullam excepturi ex unde placeat ab necessitatibus cumque exercitationem, iusto nam provident rem a accusantium sed fugit itaque iste nisi? Rem voluptatem pariatur inventore repellendus architecto, quo accusamus veritatis laboriosam impedit cum atque, odio possimus facilis eum saepe libero consequatur? Tempore sunt nobis obcaecati eius dicta omnis ea deleniti voluptatibus ex, ad perferendis, enim voluptates expedita.
  </p>
  <div id="two" class="box">222</div>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nihil, ab ratione molestias repellat voluptatibus qui eligendi aspernatur ad aperiam deserunt! Minus laboriosam totam impedit adipisci commodi laudantium sunt, provident facere corporis eligendi quidem quis ratione doloribus ipsam dicta, nostrum vero, quas ex cupiditate sed. Accusamus accusantium sunt obcaecati maxime.</p>
  <div id="three" class="box">333</div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quod aspernatur possimus eum sed numquam, tempore perspiciatis atque aut vitae quam sunt nemo consectetur? Eos facilis animi quaerat dolores.</p>
  <a href="#Jack">1111</a> <br />
    <a href="#peter">2222</a> <br />
    <a href="#ken">3333</a>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
// import axios from 'axios'
import { fetchFakeApi } from '../../api/fakeApi'

const data = ref([])
const anFlag = ref(0)
const vvv = ref(0)

// animate work
function leftSide () {
  anFlag.value = 1
  setTimeout(() => {
    anFlag.value = 0
  }, 2500)
}

function rightSide () {
  anFlag.value = 2
  setTimeout(() => {
    anFlag.value = 0
  }, 2500)
}

onMounted(() => {
  fetchFakeApi().then((res) => {
    console.log('res', res)
    data.value = res.data.columns
    vvv.value = res.data.columns[0].value ?? res.data.columns[0].id
    console.log('value', vvv.value)
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
// const timeAA = dayjs().duration

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
<style scoped>
.box{
  width: 500px;
  height: 500px;
  background: red;
}

/* animate work  */
.alert{
  width: 80%;
}
.alertAn{
  position: absolute;
  animation: alertAn 3s;
  transition-timing-function: cubic-bezier(0.2, 0.4, 0.7, 0.8);
}

.alertAntw{
  position: absolute;
  animation: alertAntw 3s;
  transition-timing-function: cubic-bezier(0.2, 0.4, 0.7, 0.8);

}

@keyframes alertAn {
     0% { left: 0; top: 20%; opacity: 1;}
    50% { left: 50%; top: 20%; opacity: 1;}
    100% { left: 100%; top: 100%; opacity: 0.2;}
}

@keyframes alertAntw {
     0% { right: 0; top: 20%; opacity: 1;}
    50% { right: 50%; top: 20%; opacity: 1;}
    100% { right: 100%; top: 100%; opacity: 0.2;}
}
</style>
