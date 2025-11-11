<script setup>
import { onMounted } from 'vue'

/**
 * 生命周期API（组合式）
 */

/**
 * beforeCreate & created 代码一律放在 setup 中
 */

const getList = () => {
  console.log('Fetching list')  
}
getList()

/**
 * 演示 onMounted
 */

onMounted ( () => {
  console.log('Logic 1 now Mounted.')
})

/**
 * 写成函数的形式，可以调用多次，并不会冲突
 * 不会像Vue 2选项式一样，一个实例只能配一个mounted。
 * 按顺序依次执行
 */

onMounted( () => {
  console.log('Logic 2 now mounted')  
})

</script>

<template>
  <div></div>
</template>