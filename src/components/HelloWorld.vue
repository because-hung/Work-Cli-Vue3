<template>
  <div class="hello">
    <!-- <h2>status => {{ statusX }}</h2>
    <h2>true 1 / false 2</h2>
    {{ num }}
    <h2>paramet</h2>
    <button @click="changeEvent(true)">TTT</button>
    <button @click="changeEvent(false)">FFF</button>
    <h2>brother</h2>
    <router-link to="./testb">bro</router-link>

    <h1>main test rebase</h1>
    <h2>main test rebase2</h2> -->

    <h2>reset tg1</h2>
    <div class="timeout">
     <h2>time </h2>
     <h1>{{diffWithDay}} - {{ diffWithHour}} - {{ diffWithMM }} - <span v-if="diffWithSS < 10">0</span>{{ diffWithSS }}</h1>
    </div>
<ul v-for="(item, i) in data" :key="i">
  <li>{{item.statusA}}</li>
  <p></p>
  <li>
    TV:
    <p></p>
       <div class="box" v-if="item.youtube.statusB !== 9 && item.youtube.video">red </div>
<div class="box" v-if="item.youtube.statusB === 9 || (!item.youtube.video && item.youtube.Animation)">green </div>
    <!-- <div class="box" v-if="comp(item) === 2">red </div>
<div class="box" v-if="comp(item) === 3">green </div> -->
  </li>
  <li>狀態:{{item.youtube.statusB}}</li>
</ul>

    <div class="container" @click="alertA()">
      <button @click.stop="alertB()">enter123</button>
    </div>

  </div>
</template>

<script>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup () {
    const localVable = localStorage.getItem('ccc')
    console.log('local', localVable)
    const store = useStore()
    console.log('vx', store.state.statusS)
    const changeEvent = (aaa) => {
      store.dispatch('getStatus', aaa)
    }
    const sayHi = () => {
      console.log('watch work')
    }
    const statusX = computed(() => store.state.statusS) // computed 取 vuex state值 -- 也可以換成 store.getters.statusV
    const num = computed(() => { // 有statusX 值 做 computed 判斷
      let result = 0
      console.log('.value', statusX.value)
      statusX.value === true ? result = 1 : result = 2

      return result
    })
    watch(num, () => {
      sayHi()
    })

    const alertA = () => {
      console.log('in')
    }

    const alertB = () => {
      console.log('out')
    }

    const data = [
      {
        statusA: 'fixture',
        youtube: {
          id: '018856',
          video: 'youtube.com',
          Animation: 'onepiece',
          statusB: 3
        }
      },
      {
        statusA: 'live',
        youtube: {
          id: '099856',
          Animation: 'onepiece',
          statusB: 3
        }
      },
      {
        statusA: 'other',
        youtube: {
          id: '018324',
          statusB: 9
        }
      },
      {
        statusA: 'complete',
        youtube: {
          id: '016664',
          statusB: 9
        }
      },
      {
        statusA: 'complete2',
        youtube: {
          id: '723324',
          statusB: 9
        }
      }
    ]
    const TVSTAUST = {
      VIDEO: 1,
      ANIMAT: 2,
      NOTHING: 3

    }

    console.log(TVSTAUST.VIDEO)

    data.forEach((item) => {
      const itYT = item.youtube
      if (itYT.video === true) {
        item.videoStatus = TVSTAUST.VIDEO
      } else if (itYT.video === undefined && itYT.Animation === true) {
        item.videoStatus = TVSTAUST.ANIMAT
      } else if (itYT.video === undefined && itYT.Animation === undefined) {
        item.videoStatus = TVSTAUST.NOTHING
      }
    })
    const timeNow = dayjs()
    console.log(timeNow)
    const timeB = dayjs().add(2, 'day')
    console.log(timeB)
    let seconds = timeB.diff(timeNow)
    console.log(seconds)
    const diffWithDay = ref(Math.floor(seconds / (1000 * 60 * 60 * 24)))
    const diffWithHour = ref(Math.floor((seconds / (1000 * 60 * 60) % 24)))
    const diffWithMM = ref(Math.floor((seconds / 1000 / 60) % 60))
    const diffWithSS = ref(Math.floor((seconds / 1000) % 60))

    const endTime = () => {
      seconds -= 4000
      diffWithDay.value = Math.floor((seconds / (1000 * 60 * 60 * 24)))
      diffWithHour.value = Math.floor((seconds / (1000 * 60 * 60) % 24))
      diffWithMM.value = Math.floor((seconds / 1000 / 60) % 60)
      diffWithSS.value = Math.floor((seconds / 1000) % 60)
    }

    setInterval(() => endTime(seconds), 1000)
    console.log(diffWithHour)

    // const Zero = (valueA) => {
    //   let result = ''
    //   if (valueA.value.toString().split('').length < 2) {
    //     result = ('0' + valueA.value)
    //   }
    //   return Number(result)
    // }
    // watch(diffWithSS, () => {
    //   console.log(Zero(diffWithSS))
    //   diffWithSS.value = Zero(diffWithSS)
    // })

    const comp = (item) => {
      if (item.youtube.statusB !== 9 && item.youtube.video) {
        return 2
      } else if (item.youtube.statusB === 9 || (!item.youtube.video && item.youtube.Animation)) {
        return 3
      } else {
        return 0
      }
    }

    return {
      changeEvent,
      num,
      statusX,
      alertA,
      alertB,
      data,
      diffWithMM,
      diffWithSS,
      diffWithHour,
      diffWithDay,
      comp
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  border: 3px black solid;
  padding: 15px;
  display: flex;
  justify-content: end;
  margin: 50px;
}

button{
  width: 80px;
  height: 80px;

}

.box{
  width: 150px;
  height: 100px;
  font-size: 24px;
}
</style>
