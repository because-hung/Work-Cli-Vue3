<template >
    <div class="container">
      <div class="fakeEl">
        <div class="order">帳單</div>
      </div>
      <br>
      <br>
      <div class="btnGroup">
        <button @click="switchC(1, timeLabel)">{{timeLabel}}</button>
        <button @click="switchC(2, CountryLabel)">{{CountryLabel}}</button>
        <button @click="switchC(3, TypeLabel)">{{TypeLabel}}</button>
      </div>
      <div class="content">
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
import { reactive, ref } from 'vue'
export default {
  setup () {
    const ogIndex = ref(0)
    const showStatus = ref(0)
    const showTime = ref(false)
    const showCountry = ref(false)
    const showType = ref(false)
    const timeLabel = ref('今天')
    const CountryLabel = ref('台北北')
    const TypeLabel = ref('預購')

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

    return {
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
      ogIndex
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

</style>
