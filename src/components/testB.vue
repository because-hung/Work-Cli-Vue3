<template>
<h2>brother</h2>
   <button @click="changeEve(true)">BBBTTT</button>
   <button @click="changeEve(false)">BBBFFF</button>
    <h2>vx:{{store.state.statusS}}</h2>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const changeEve = (ccc) => {
  store.dispatch('getStatus', ccc)
  localStorage.setItem('ccc', ccc)
}
</script>
