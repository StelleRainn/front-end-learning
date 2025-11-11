<script setup>
  import { ref } from 'vue';

  const count = ref(100)
  const testFn = () => {
    console.log('The fucntion has been called')    
  }

  // 通过 definExpose 指定哪些属性/方法可以被访问
  defineExpose({
    count,
    testFn
  })
</script>

<template>
  <div></div>
</template>