<script setup>
/**
 * 组合式API - 计算属性 computed
 */

import {ref, computed} from 'vue'

const list = ref([1, 2, 3, 4, 5, 6, 7])

// 只读
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})

// 可读可写 → 配get和set
const operatedList = computed({
  get: () => list.value.filter(item => item > 2),
  set: (val) => list.value.push(val)
})

operatedList.value = 10 // Add 10 into the original list

// 计算属性两点最佳实践
// 1.计算属性中不该有“副作用” → 异步请求/DOM操作
// 2.尽量避免直接修改计算属性的值，特殊情况配置get和set

</script>

<template>
  <div>Original Array: {{ list }}</div><br/>
  <div>ComputedArray: {{ computedList }}</div><br/>
  <div>operatedList: {{ operatedList }}</div>
</template>