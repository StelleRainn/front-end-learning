<script setup>
/**
 * 组合式API-父子通信
 */

// 导入子组件 - 不需要再在components中注册，导入后可以在模板中直接使用
import SonComponent from '@/components/SonComponent.vue'
import { ref } from 'vue';

// 父传子 - 1.定义响应式数据（或直接写死非响应式数据），并通过绑定属性的方式传给子组件
const count = ref(100)
const addCount = () => {
  count.value += 10
}

// 子传父 - 2.
// 在父组件中，监听同名事件，并提供对应处理函数
// 可以获取子组件传递过来的形参
const handleConsume = (val) => {
  console.log('param from son compo:', val)
  count.value -= val
}

</script>

<template>
  <h3>Father component</h3>
  <button @click="addCount">addCount</button>
  <SonComponent 
  :count="count" car="AMG GT"
  @consumeCount="handleConsume"></SonComponent>
</template>