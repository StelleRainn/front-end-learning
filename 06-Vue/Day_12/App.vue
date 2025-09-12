<script setup>
import Son1Compo from './components/Son1Compo.vue'
import Son2Compo from './components/Son2Compo.vue'

import { useCounterStore } from './store/counter'
import { useChannelStore } from './store/channel'

const store = useCounterStore()
const channelStore = useChannelStore()
// 不要通过解构来获取store中的属性或方法等，这会破坏响应式，例如以下代码
// const { countA, doubleCountA } = store
// 如果需要解构使用，可以使用`storeToRefs(store)`方法，去结构属性；而方法可以直接从 store 解构
// 例如 const { countA } = storeToRefs(store) 
// const { getChannelList } = channelStore
console.log(store)

</script>

<template>
  <div>
    <h1>The top compo - {{ store.countA }} - {{ store.doubleCountA }} </h1>
    <Son1Compo></Son1Compo>
    <Son2Compo></Son2Compo>
  </div>
  <button @click="channelStore.getChannelList()">getChannelList</button>
  <ul>
    <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>

</style>
