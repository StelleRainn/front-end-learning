<script setup>
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()
</script>

<template>
  <div>The son 2 compo - {{ store.countA }} - {{ store.doubleCountA }}</div>
  <button @click="store.sub()">-</button>
</template>

<style scoped>

</style>
