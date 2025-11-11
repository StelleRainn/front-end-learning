<script setup>
/** 组合式API之setup的特点
 * 1. setup执行时机：比beforeCreate更早
 * 2. setup无法获取this → Undefined
 * 3. 数据和函数需要在最后 return，才能在模板中使用
 * 4. 为解决频繁return的问题，可以使用<script setup>语法糖
 */

  // export default {
  //   setup () {
  //   const message = 'Hello'
  //   const showMessage = () => {
  //     console.log(message)      
  //   }
    
  //   return {
  //     message,
  //     showMessage,
  //   }
  // },

  // beforeCreate () {
  //   console.log('beforeCreate')
  // }

// }

const message = 'Hello'
const showMessage = () => {
  console.log(message)
}

</script>

<template>
  <div>Learn Vue3</div>
  <div>{{ message }}</div>
  <button @click="showMessage">Click</button>
</template>