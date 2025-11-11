<script setup>
import { provide, ref } from 'vue';
import MiddleCom from './components/MiddleCom.vue'

/**
 * provide && inject 
 * 可以用于跨层传递数据，包括普通数据，响应式数据，乃至传递方法
 * 使用：顶层 provide 提供，底层 inject 接收
 */

// 1. 普通常量
const themeColor = 100
provide('themeColor', themeColor)

// 2. 响应式数据
const value = ref(100)
provide('responsiveValue', value)
setInterval(()=>{
  value.value += 5
}, 1000) // 每秒更新

// 3. 传递一个方法
// 我们遵循“谁的数据谁管理”的原则，所以，我们不能也不允许让底层组件直接操作顶层组件的数据
// 但我们可以在顶层定义操纵数据的方法，并传给底层组件，这样，就可以修改顶层的数据

// 3.1 可以定义一个函数，并传递
const valueAdd = (params) => {
  value.value += params
}
provide('valueAdd', valueAdd)

// 3.2 也可以直接在第二个参数直接赋予一个回调函数
provide('valueDel', (params) => {value.value -= params})

</script>

<template>
  <h1>This is the top compo.</h1>
  <MiddleCom></MiddleCom>
</template>