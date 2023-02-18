<template>
  <div class="outer1">
    <div class="box1"><span>職位:</span><span>經理</span></div>
    <div class="box1"><span>職位:</span><span>經理</span></div>
    <div class="box1"><span>職位:</span><span>經理</span></div>
  </div>
</template>
<script>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const user = reactive({
      name: 'Mike',
      age: '12',
      tel: '0910xxxxxx'
    })

    const counter = ref(0)

    const clickBox = function () {
      console.log(counter.value + 1)
      console.log(user)
    }
    console.log(user)
    console.log(user.name)
    const store = useStore()
    console.log('1', store.state.statusS)

    const statusX = computed(() => store.state.statusS)
    console.log('1 com', statusX.value)

    const statusVV = computed(() => store.getters.statusV)

    console.log('1 com VV', statusVV.value)
    return {
      user,
      counter,
      clickBox
    }
  }
}
</script>
<style lang="scss">
.box1{
  width: 200px;
  height: 200px;
  background: red;
  margin: 10px;
  span{
    line-height: 200px;
    &:nth-of-type(odd){
      position: relative;
      top: -10px;
    }
    &:nth-of-type(even){
      position: relative;
      top: 10px;
    }
  }
}

@media (max-width: 769px) {
  .outer1{
    display: flex;
  }
}
</style>
