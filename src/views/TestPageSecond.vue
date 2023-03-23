<template>
  <div class="container">
    <h3 @click="changeNum()">vuex: {{Xnum}}</h3>
    <button type="button" class="btn btn-primary ms-5 mb-2">Primary</button>
    <h2 class="text-success"> tst tes</h2>
    <h3 class="border border-2 text-red-500 m-2 py-2">text tai</h3>
    <!-- country
       <div class="nav">
      <div class="country">
      <div class="h4" @click="openList = !openList">Taiwan <img src="../assets/TW.png" alt=""></div>
      <ul class="list" v-if='openList'>
        <li>TW <img src="../assets/TW.png" alt=""></li>
        <li>JP <img src="../assets/JP.png" alt=""></li>
        <li>KR <img src="../assets/KR.jpg" alt=""></li>
      </ul>
      </div>
    </div> -->
    <!-- <div class="productB">
     <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
      <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
      <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
      <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
    </div> -->
    <header>
      <div class="leftS">
      <div class="logo">
        <img src="../assets/JP.png" alt="">
        <h2>serniors</h2>
      </div>
      <div class="btnGroup">
        <button>home</button>
        <button>groups</button>
        <button>events</button>
      </div>
      </div>
      <div class="user">
        <img src="../assets/TW.png" alt="">
        <h2>Anna</h2>
      </div>
    </header>
    <section>
      <!-- <div class="title">Discover</div> -->
      <div class="info">
        <div class="cardA">
          <img src="https://fakeimg.pl/300x200/" alt="">
          <div class="content">
            <div class="contentTitle">
            <h4>coffeee llll</h4>
            <h6 @click="clickme()">wddhere is uuuu</h6>
            </div>
            <a href="mailto:email@gmail.com">mail me</a>
             <button>join</button>
          </div>
        </div>
            <div class="cardA">
          <img src="https://fakeimg.pl/300x200/" alt="">
          <div class="content">
            <div class="contentTitle">
            <h4>coffeee llll</h4>
            <h6>where is uuuu</h6>
            </div>
                 <a href="mailto:email@gmail.com">mail me</a>
             <button>join</button>
          </div>
        </div>
            <div class="cardA">
          <img src="https://fakeimg.pl/300x200/" alt="">
          <div class="content">
            <div class="contentTitle">
            <h4>coffeee llll</h4>
            <h6>where is uuuu</h6>
            </div>
                 <a href="mailto:email@gmail.com">mail me</a>
             <button>join</button>
          </div>
        </div>
            <div class="cardA">
          <img src="https://fakeimg.pl/300x200/" alt="">
          <div class="content">
            <div class="contentTitle">
            <h4>coffeee llll</h4>
            <h6>where is uuuu</h6>
            </div>
                 <a href="mailto:email@gmail.com">mail me</a>
             <button>join</button>
          </div>
        </div>
            <div class="cardA">
          <img src="https://fakeimg.pl/300x200/" alt="">
          <div class="content">
            <div class="contentTitle">
            <h4>coffeee llll</h4>
            <h6>where is uuuu</h6>
            </div>
                 <a href="mailto:email@gmail.com">mail me</a>
             <button>join</button>
          </div>
        </div>
            <div class="cardA">
          <img src="https://fakeimg.pl/300x200/" alt="">
          <div class="content">
            <div class="contentTitle">
            <h4>coffeee llll</h4>
            <h6>where is uuuu</h6>
            </div>
              <a href="mailto:111111@qq.com;111112@qq.com?cc=222222@qq.com;222223@qq.com&bcc=333333@qq.com;333334@qq.com&subject=this is title&body=this is body">tedddst</a>
             <button>join</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { onMounted, reactive, ref, watch, computed } from 'vue'
import { fetchFakeApi } from '../../api/fakeApi'
import { useStore } from 'vuex'
export default {
  setup () {
    // const arrow = () => {
    //   console.log('Hello world, my name is ' + this.name)
    // }
    // arrow() // (1)

    // const user = {
    //   name: 'Shubo',
    //   arrow: () => {
    //     console.log('Hello world, my name is ' + this.name)
    //   },
    //   speak () {
    //     arrow()
    //   }
    // }

    // user.arrow() // (2)
    // user.speak() // (3)
    const openList = ref(false)
    const msg = ref('')
    watch(msg, () => {
      console.log('msg', msg.value)
    })
    const arr = [
      {
        id: 1,
        name: 'a'
      },
      {
        id: 2,
        name: 'b'
      },
      {
        id: 3,
        name: 'c'
      },
      {
        id: 4,
        name: 'd'
      }
    ]

    const newArr = arr.reduce((acc, cur) => {
      acc[cur.id] = cur.name
      return acc
    }, {})
    console.log('obj', newArr)

    const newArr2 = arr.reduce((acc, cur) => {
      acc.push(cur.name)
      return acc
    }, [])
    console.log('objTW', newArr2)

    // answer reduce
    const obj = {
      1: 'a',
      2: 'b',
      3: 'c',
      4: 'd'
    }

    // reduce -2
    const arr2 = [
      { name: 'Alice', job: 'Data Analyst', country: 'AU' },
      { name: 'Bob', job: 'Pilot', country: 'US' },
      { name: 'Lewis', job: 'Pilot', country: 'US' },
      { name: 'Karen', job: 'Software Eng', country: 'CA' },
      { name: 'Jona', job: 'Painter', country: 'CA' },
      { name: 'Jeremy', job: 'Artist', country: 'SP' }
    ]
    const result = arr2.reduce((acc, cur) => {
      const country = 'country'
      const newkey = cur[country]
      if (!acc[newkey]) {
        acc[newkey] = []
      }
      acc[newkey].push(cur)
      return acc
    }, [])

    console.log(result)
    // store
    const store = useStore()
    const data = ref([])
    const deta = reactive({
      data: []
    })
    const newData = []
    const aaa = ref(store.state.statusA)

    function changeNum () {
      store.dispatch('getNum', 5)
      // console.log(store.state.testNum)
    }

    const Xnum = computed(() => store.state.testNum)

    function clickme (value) {
      window.location.href = ';mailto:user@example.com?subject=Subject&body=message%20goes%20here'
      store.dispatch('getStatusA', value)
      aaa.value = store.state.statusA
      console.log(aaa)

      // two for work
    }
    function getData () {
      deta.data.data.columns.forEach((item) => {
        const itel = item.food.filter((el) => el.cookie.includes('s'))
        newData.push(itel)
      })
      console.log('nData', newData)
    }

    const numAry = [1, 2, 4, 5, 7]
    const nAry = numAry.reduce((acc, cur) => {
      return acc + cur
    })
    console.log('numAll', nAry)

    const restaurant = {
      name: '那一天義法餐館',
      chef: '阿華師',
      menu: {
        duck: '法式櫻桃鴨胸',
        pig: '噶瑪蘭黑豚',
        rice: '檸檬奶油煙燻鮭魚燉飯'
      }
    }

    const { name, chef, menu } = restaurant
    console.log('name', name)
    console.log('chef', chef)
    console.log('menu', menu)

    onMounted(() => {
      fetchFakeApi().then((res) => {
        console.log('res', res)
        data.value = res
        deta.data = res
        const dataAry = deta.data.data.columns[0].food[0].cookie
        console.log('data', dataAry)
        getData()
      })
    })

    const ary = ['a', 'b', 'c']
    const aryB = [...ary]
    console.log(aryB)

    return {
      data,
      deta,
      clickme,
      aaa,
      arr,
      obj,
      msg,
      openList,
      Xnum,
      changeNum
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
    padding: 0px 10%;
}
// country
// .nav{
//   border: 1px solid black;
//   background: yellow;
// }
// .country{
//   margin-left: auto;
// }
// .h4{
//   display: flex;
//   background: white;
//   padding: 5px;
//   cursor: pointer;
// }
// img{
//   width: 120px;
//   height: 50px;
// }
// .list{
//   background: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   li{
//     display: flex;
//     justify-content: space-between;
//     padding: 10px;
//     border: 1px solid red;
//     margin: 10px 0px;
//   }
// }
//
 img{
   width: 120px;
   height: 50px;
 }

 header{
  display: flex;
 .leftS{
  display: flex;
 }
  .logo{
    display: flex;
  }
  .btnGroup{
    margin-left: 50px;
    button{
      margin:0px 20px;
      width: 50px;
      height: 50px;
      border-bottom: 1px red solid;
      font-size: 20px;
      font-weight: 700;
      transform: translateY(-10px);
    }
    button:hover{
      color:green;
      border-bottom: 1px green solid;
    }
  }
  .user{
    margin-left: auto;
    display: flex;
  }
 }

 section{
  margin-top: 50px;
  display: flex;
  margin:  auto;
  .title{
    font-size: 24px;
    font-weight: 700;
    text-align: left;
  }
  .info{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
      }
  .cardA{
    width: 20%;
    margin: 5px 10px;
    img{
      width: 300px;
      height: 200px;
    }
    .content{
      display: flex;
      justify-content: space-between;
    }
  }
  .cardA:last-child{
    margin-right: auto;
    margin-left: 30px;
  }
 }
</style>
