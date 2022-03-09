<template>
<h2>son</h2>
<button @click="changeStatus(true)">enterT</button>
<button @click="changeStatus(false)">enterf</button>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const changeStatus = (bbb) => {
  store.dispatch('getStatus', bbb)
  localStorage.setItem('ccc', bbb)
}
</script>
