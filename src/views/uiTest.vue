<template >
    <div class="container">
      <div class="outterR">
      <div class="testPo"> //外框
      </div>
        <div class="outterP">
        <div class="boxP"><p class="one">1</p><p>2</p></div>
        <div class="boxP"><p>1</p><p>2</p></div>
      <div class="boxP"><p>1</p><p>2</p></div>
        </div>
        </div>
      <div class="testAAAAA" v-if="false">
        <h2>img</h2>
        <img class="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqzSddfpyA4VvGFIydhj0vcTi3hPynZ2_K5IW_ioZB-LuFjh8&s'" alt="">
      </div>
        <div class="test2" v-if="false">
        <h2>bg-img</h2>
       <div class="bgImg" v-if="false"></div>
      </div>
      <div class="fakeEl" v-if="false">
        <div class="order">帳單</div>
      </div>
      <br>
      <br>
      <div class="btnGroup">
        <button @click="switchC(1, timeLabel)">{{timeLabel}}</button>
        <button @click="switchC(2, CountryLabel)">{{CountryLabel}}</button>
        <button @click="switchC(3, TypeLabel)">{{TypeLabel}}</button>
      </div>
      <div class="content" ref="main">
        <ul class="time" :key="showStatus" v-if="showStatus == 1" :class="[ ogIndex > 0 ? 'alertAn' : '' , ogIndex < 0 ? 'alertAntw' : '' ]">
          <li @click="switchC(1, item)" v-for="(item, i) in timeData.result" :key="i">{{item}}</li>
        </ul>
        <ul class="country" :key="showStatus" v-if="showStatus == 2" :class="[ ogIndex > 0 ? 'alertAn' : '', ogIndex < 0 ? 'alertAntw' : '']">
            <li  @click="switchC(2, item)" v-for="(item, i) in countryData.result" :key="i">{{item}}</li>
        </ul>
        <ul class="type" :key="showStatus" v-if="showStatus == 3" :class="[ ogIndex > 0 ? 'alertAn' : '', ogIndex < 0 ? 'alertAntw' : '']">
           <li @click="switchC(3, item)" v-for="(item, i) in typeData.result" :key="i">{{item}}</li>
        </ul>
      </div>
    </div>
</template>
<script>
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
export default {
  setup () {
  // RegExp 驗證, 視窗 click 任意處點擊關掉
    const rex1 = /^[A-Za-z\d]{6,12}$/
    // (?![0-9]+$)
    // 断言此位置之后，字符串结尾之前，所有的字符不能全部由数字组成
    // (?![a-zA-Z]+$)
    // 断言此位置之后，字符串结尾之前，所有的字符不能全部由26个英文字母组成
    // [0-9A-Za-z]{6,12}
    // 匹配整个字符串由6~12位由数字和26个英文字母混合而成
    // EX: const rex = /^(?![\d]+$)(?![A-Za-z]+$)[A-Za-z\d]{6,12}$/
    console.log(rex1.test('123456dff!'))

    const pageX = ref(0)
    const px1 = ref(0)
    const px2 = ref(0)
    const ogIndex = ref(0)
    const showStatus = ref(1)
    const showTime = ref(false)
    const showCountry = ref(false)
    const showType = ref(false)
    const timeLabel = ref('今天')
    const CountryLabel = ref('台北北')
    const TypeLabel = ref('預購')
    const { proxy } = getCurrentInstance()
    function downE (e) {
      console.log('1', e.clientX)
      px1.value = e.clientX
    }
    function upE (e) {
      const val = showStatus.value
      console.log('2', e.clientX)
      px2.value = e.clientX
      pageX.value = px2.value - px1.value
      if (pageX.value < 0 && showStatus.value !== 3) {
        showStatus.value++
      } else if (pageX.value > 0 && showStatus.value !== 1) {
        showStatus.value--
      }
      ogIndex.value = showStatus.value - val
    }

    function switchC (val, item) {
      ogIndex.value = showStatus.value - val
      switch (val) {
        case 1:
          // showTime.value = !showTime.value
          // showCountry.value = false
          // showType.value = false
          timeLabel.value = item
          break
        case 2:
          // showCountry.value = !showCountry.value
          // showTime.value = false
          // showType.value = false
          CountryLabel.value = item
          break
        default:
          // showType.value = !showType.value
          // showCountry.value = false
          // showTime.value = false
          TypeLabel.value = item
          break
      }
      showStatus.value = val
      // if (showStatus.value === val) {
      //   showStatus.value = 0
      // } else {
      //   showStatus.value = val
      // }
      // setTimeout(() => {
      //   if (showStatus.value === val) {
      //     showStatus.value = 0
      //   } else {
      //     showStatus.value = val
      //   }
      // }, 1500)
    }

    function switchC2 (val, item) {
      switch (val) {
        case 1:
          timeLabel.value = item
          break
        case 2:
          CountryLabel.value = item
          break
        default:
          TypeLabel.value = item
          break
      }
      if (showStatus.value === val) {
        showStatus.value = 0
      } else {
        showStatus.value = val
      }
    }

    function changeShow (val) {
      if (val === 1) {
        showTime.value = !showTime.value
        showCountry.value = false
        showType.value = false
      } else if (val === 2) {
        showCountry.value = !showCountry.value
        showTime.value = false
        showType.value = false
      } else {
        showType.value = !showType.value
        showCountry.value = false
        showTime.value = false
      }
    }

    function changeStatus (val) {
      if (showStatus.value === val) {
        showStatus.value = 0
      } else {
        showStatus.value = val
      }
    }
    const countryData = reactive({
      result: ['台中', '台南', '台北北', '桃園', '新竹', '彰化', '苗栗', '高雄', '屏東', '宜蘭', '宜蘭', '宜蘭']
    })
    const timeData = reactive({
      result: ['今天', '明天', '昨天', '一個月前', '半個月前']
    })
    const typeData = reactive({
      result: ['投報', '預購', '已匯款', '取消', '未確認']
    })

    onMounted(() => {
      const el = proxy.$refs.main
      console.log(el)
      el.addEventListener('mousedown', downE)
      el.addEventListener('mouseup', upE)
    })

    return {
      downE,
      upE,
      countryData,
      timeData,
      typeData,
      changeShow,
      showTime,
      showCountry,
      showType,
      switchC,
      changeStatus,
      showStatus,
      timeLabel,
      TypeLabel,
      CountryLabel,
      switchC2,
      ogIndex,
      pageX
    }
  }
}
</script>
<style lang="scss" scoped>

.alertAn{
  animation: alertAn 2s;
  transition-timing-function: cubic-bezier(0.2, 0.4, 0.7, 0.8);
}

.alertAntw{
  animation: alertAntw 2s;
  transition-timing-function: cubic-bezier(0.2, 0.4, 0.7, 0.8);
}

.alertRe{
  animation-direction: reverse;
}

@keyframes alertAn {
     0% { transform: translateX(100%); opacity: 0;}
    100% { transform: translateX(0); opacity: 1;}
}

@keyframes alertAntw {
     0% { transform: translateX(-100%); opacity: 0;}
    100% { transform: translateX(0); opacity: 1;}
}
.btnGroup {
    border-bottom: red 1px solid;
    button{
    margin: 10px;
    width: 100px;
    height: 40px;
    border: red 1px solid;
    border-radius: 20px;
    }
}
.time, .type, .country{
    padding: 0 20px;
    margin: 0 auto;
    width: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1;
    border: red 1px solid;
    li{
        margin: 5px;
        padding: 5px;
        border: red 1px solid;
        border-radius: 5px;
    }
}
.order::before{
  content:'';
  position: absolute;
  right: 52%;
  top: 15%;
  width: 100px;
  height: 100px;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqzSddfpyA4VvGFIydhj0vcTi3hPynZ2_K5IW_ioZB-LuFjh8&s');

}
.order::after{
  content:'NO';
  position: absolute;
  margin-left: 5px;
}
// .country{
//     padding: 0;
//     margin: 0 auto;
//     width: 400px;
//     display: grid;
//     justify-items: center;
//     grid-template-columns: repeat(4, 1fr);
//     grid-auto-rows: auto;
//     border: red 1px solid;
//     li{
//         margin: 5px;
//         padding: 5px;
//         border: red 1px solid;
//         border-radius: 5px;
//     }
// }
.img2{
  height: 150px;
}
.bgImg{
  width: 260px;
  height: 200px;
   background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqzSddfpyA4VvGFIydhj0vcTi3hPynZ2_K5IW_ioZB-LuFjh8&s');
   background-repeat: no-repeat;
background-size: 200px 200px;
}
.outterR{
  position: relative;
}

.testPo{
  max-width: 1200px;
  margin: 0 auto;
  height: 300px;
  border: 1px black solid;
  display: flex;
  position: relative;
  .boxO{
    width: 300px;
    height: 100px;
    border: 1px blue solid;
     position: absolute;
  top: 38%;
  right: 26%;
  font-size: 20px;
  }

}

.outterP{
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  top: 60%;
  right: 20%;
  font-size: 20px;
  border: 1px blue solid;
  width: 60%;
}

.boxP{
  width: 20%;
  height: 50px;
  background: red;
  color: white;
  line-height: 50px;
  font-size: 20px;
  display: flex;
 justify-content: center;
  .one{
     margin-right: auto;
  }
}

</style>
