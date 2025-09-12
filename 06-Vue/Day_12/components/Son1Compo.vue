<script setup>
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()
</script>

<template>
  <div>The son 1 compo - {{ store.countA }} - {{ store.doubleCountA }}</div>
  <button @click="store.add()">+</button>
</template>

<style scoped>

</style>
