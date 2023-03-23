<template>
<div class="boot-group d-flex justify-content-around align-items-center mb-5">
  <div class="card" style="width: 18rem;">
  <img src="https://fakeimg.pl/200x100/" class="card-img-top" alt="https://fakeimg.pl/200x100/">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://fakeimg.pl/200x100/" class="card-img-top" alt="https://fakeimg.pl/200x100/">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://fakeimg.pl/200x100/" class="card-img-top" alt="https://fakeimg.pl/200x100/">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://fakeimg.pl/200x100/" class="card-img-top" alt="https://fakeimg.pl/200x100/">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://fakeimg.pl/200x100/" class="card-img-top" alt="https://fakeimg.pl/200x100/">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div class="item-group grid grid-cols-4 gap-4 px-4">
  <div @click="alertG('A')" class="test-item flex flex-col item-center justify-center"><img src="https://fakeimg.pl/200x100/" alt=""> <span class="my-2">title</span> <div class="price mt-5">100</div> </div>
     <div @click="alertG('B')" class="test-item flex flex-col item-center justify-center"><img src="https://fakeimg.pl/200x100/" alt=""> <span class="my-2">title</span> <div class="price mt-5">100</div> </div>
       <div @click="alertG('C')" class="test-item flex flex-col item-center justify-center"><img src="https://fakeimg.pl/200x100/" alt=""> <span class="my-2">title</span> <div class="price mt-5">100</div> </div>
         <div @click="alertG('D')" class="test-item flex flex-col item-center justify-center"><img src="https://fakeimg.pl/200x100/" alt=""> <span class="my-2">title</span> <div class="price mt-5">100</div> </div>
           <div @click="alertG('E')" class="test-item flex flex-col item-center justify-center"><img src="https://fakeimg.pl/200x100/" alt=""> <span class="my-2">title</span> <div class="price mt-5">100</div> </div>

</div>
 <router-link to="">Home</router-link> |
<button @click="clickA()">A</button>
<button @click="clickB()">B</button>
<h2>{{testNum}}</h2>
<h3>vuex: {{Xnum}}</h3>
  <!-- <p>{{ com }}</p>
<button @click="count()">change</button>
<div class="outer">
    <div class="boxT mx-3"><span class="job">職位:</span><span class="sub">經理</span></div>
    <div class="boxT mx-3"><span class="job">職位:</span><span class="sub">經理</span></div>
    <div class="boxT mx-3"><span class="job">職位:</span><span class="sub">經理</span></div>
   <img src="https://fakeimg.pl/300/">
</div> -->
  <div>
<div class="topMenu">
  <div class="lMenu">
    <ul>
      <li class="text-red-500 font-bold">home</li>
      <li>shop</li>
      <li>about</li>
      <li>contacts</li>
    </ul>
  </div>
  <div class="rMenu">
    <button>sign in</button>
    <button>sign up</button>
  </div>
</div>
    <div class="swiperCom">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide><img src="https://fakeimg.pl/200x100/" alt=""> 1</swiper-slide>
        <swiper-slide><img src="https://fakeimg.pl/200x100/" alt=""> 2</swiper-slide>
        <swiper-slide><img src="https://fakeimg.pl/200x100/" alt=""> 3</swiper-slide>
        <swiper-slide><img src="https://fakeimg.pl/200x100/" alt=""> 1</swiper-slide>
        <swiper-slide><img src="https://fakeimg.pl/200x100/" alt=""> 2</swiper-slide>
        <swiper-slide><img src="https://fakeimg.pl/200x100/" alt=""> 3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style>
.banner {
  background-image: url("https://fakeimg.pl/300/");
  height: 300px;
}
li {
  list-style: none;
}
/* 切版 */
button {
  margin: 5px;
}
.outer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.boxT {
  width: 150px;
  height: 150px;
  background: red;
  color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}
.job {
  margin-bottom: 18px;
}
.sub {
  margin-top: 18px;
}
@media (max-width: 768px) {
  .outer {
    flex-direction: column;
  }
}
/* cut */
.lMenu{
  display: flex;
}
.swiperCom{
  margin-top: 50px;
}
</style>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { reactive, ref, onMounted, watchEffect, computed } from 'vue'
import { fetchFakeApi } from '../../api/fakeApi'
import { useStore } from 'vuex'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const store = useStore()
    const Xnum = ref(store.state.testNum)
    // swiper, computed(for data)
    const testNum = ref(1)
    const alertG = (val) => {
      alert('success! ' + val)
    }
    function clickA () {
      testNum.value = 2
    }
    function clickB () {
      testNum.value = 1
    }
    const testAA = ref([1, 2, 3, 4, 5])
    const testBB = ref({
      name: 'ling',
      id: {
        number: 1207
      }
    })
    console.log('testAA', testAA.value[0])
    console.log('testBB', testBB.value.name)
    const CC = ref(1)
    const status = reactive({
      box1: 11,
      box2: 22,
      box3: 33
    })
    const Tcom = computed(() => {
      let ST = null
      if (CC.value === 1) {
        ST = 11
      } else if (CC.value === 2) {
        ST = 22
      } else if (CC.value === 3) {
        ST = 33
      } else {
        ST = 44
      }
      return ST
    })
    function getMe () {
      CC.value += 1
    }
    // swiper data
    const data = reactive([
      {
        title: '520 for today',
        info: 'report',
        id: 1,
        name: 'bob'
      },
      {
        title: 'want a girl for me',
        info: 'announce',
        id: 2,
        name: 'Rose'
      },
      {
        title: 'pig me now',
        info: 'news',
        id: 3,
        name: 'froggy'
      },
      {
        title: 'sing a song for you',
        info: 'news',
        id: 4,
        name: 'me'
      }
    ])
    // import { computed, ref } from 'vue'
    // const bool = ref(false)
    // const com = computed(() => {
    //   let txt = 'hello World'
    //   if (bool.value === 1) {
    //     txt = 'world'
    //   } else if (bool.value === 2) {
    //     txt = 'war'
    //   } else {
    //     txt = 'hello World'
    //   }

    //   return txt
    // })
    // function count () {
    //   bool.value += 1
    // }
    // swiper
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    const redeta = reactive({
      data: null
    })
    const deta = ref([])
    onMounted(() => {
      fetchFakeApi().then((res) => {
        console.log('res', res)
        deta.value = res
        redeta.data = reactive(res)
        console.log('deta', deta.value)
        console.log('redeta', redeta.data)
      })
    })
    const pointRef = ref({
      idx: 0
    })
    const pointReactive = reactive({
      idx: 0
    })
    const count = ref(0)
    // watch(pointRef, (newVal) => {
    //   console.log('ref:', newVal)
    // })

    // watch(pointReactive, (newVal) => {
    //   console.log('reactive:', newVal)
    // })
    watchEffect(() => {
      console.log('ref:', pointRef.value.idx)
      console.log('reactive:', pointReactive.idx)
      if (pointReactive.idx > 0) {
        count.value = 2
      }
    })
    setTimeout(() => {
      pointRef.value.idx = 1
      pointReactive.idx = 1
    }, 1000)
    return {
      status,
      Tcom,
      getMe,
      deta,
      redeta,
      data,
      pointRef,
      pointReactive,
      count,
      onSwiper,
      onSlideChange,
      testNum,
      clickA,
      clickB,
      alertG,
      Xnum,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>
