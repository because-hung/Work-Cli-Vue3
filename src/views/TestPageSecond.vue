<template>
  <div class="containerB">
    <h2>1:{{ data }}</h2>
    <h2>{{ deta.data }}</h2>
    <header>
      <div class="title">sleep product reviewes</div>
      <ul class="menu">
        <li class="first">home</li>
        <li>about</li>
        <li>item</li>
        <li>shop</li>
      </ul>
    </header>
    <div class="bannerB">
      <div class="productImg"><img src="https://fakeimg.pl/300x200/" alt=""></div>
      <div class="content">
        <h2>title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rem ullam, molestias illum incidunt aperiam autem omnis aliquid accusantium eveniet repudiandae! Consequatur quis magni autem praesentium dolorum repellat ducimus repellendus!</p>
        <button>enter in</button>
      </div>
    </div>
    <div class="slogan">show me your clothes</div>
    <div class="productB">
     <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
      <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
      <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
      <div class="cardB"><img src="https://fakeimg.pl/300x200/" alt=""><h2>title for product</h2><h3>Lorem, ipsum.
     Quidem, autem!</h3></div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref, watch } from 'vue'
import { fetchFakeApi } from '../../api/fakeApi'
import { useStore } from 'vuex'
export default {
  setup () {
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

    function clickme (value) {
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
      msg
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
.containerB{
    padding: 0px 10%;
}
header{
  text-align: left;
  margin-left: 10px;
  .title{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .menu{
    display: flex;
    padding-left: 0px;
    li{
    margin: 5px;
    padding: 10px;
  }
   .first{
      margin-left: 0px;
      padding-left: 5px;
      font-weight: 700;
    }
  }
}
.bannerB{
  display: flex;
  .productImg{
    width: 48%;
    img{
      width: 100%;
    }
  }
  .content{
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    p{
      padding: 0 20%;
      margin: 20px 0;
    }
    button{
      width: 100px;
      height: 50px;
      border: 3px solid black;
      align-self: center;
    }
  }
}
.slogan{
  text-align: left;
  margin: 50px 0px 30px 0px;
   font-size: 36px;
      font-weight: 700;
}
 .productB{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    .cardB{
      img{
        width: 100%;
      }
      h2, h3{
      font-size: 20px;
      margin: 10px 0px;
      }
    }
  }
</style>
