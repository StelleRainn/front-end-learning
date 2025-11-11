<script setup>
/**
 * reactive & ref
 * 
 * reactive
 * 1. 接收一个对象类型的数据，返回一个响应式的对象
 * 
 * ref
 * 1. 接收简单类型或者对象类型的数据，返回一个响应式对象
 * 2. 本质上：是在原有传入数据的基础上，外层包了一层对象，成为了复杂类型
 * 3. 底层：包成复杂类型之后，再借助 reaction 实现响应式
 * 4. 注意点：1）脚本内访问数据，需要加.value 2）在template中访问数据，不需要加.value
 * 
 * 推荐：统一使用ref，统一编码规范
 */

  import { reactive, ref } from 'vue'

  const state = reactive({
    count: 1
  })

  const addCount = () => {
    state.count++
  }

  const refCount = ref(0)
  console.log(refCount)
  console.log(refCount.value)

  const addRefCount = () => {
    refCount.value++
  }
  

</script>

<template>
  <div>{{ state.count }}</div>
  <button @click="addCount">reactive +1</button>

  <div>{{ refCount }}</div>
  <button @click="addRefCount">ref + 1</button>
</template>