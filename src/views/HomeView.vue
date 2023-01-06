<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <eChart></eChart>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import eChart from '@/views/eChart.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    eChart
  }
}
</script>
