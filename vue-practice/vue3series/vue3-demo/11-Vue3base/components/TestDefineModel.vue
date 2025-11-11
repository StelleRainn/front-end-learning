<script setup>
// 可以直接获取传过来的 value，并且可以直接修改
const modelValue = defineModel()

</script>

<template>
  <input 
    type="text"
    :value="modelValue"
    @input="e => modelValue = e.target.value">
</template>