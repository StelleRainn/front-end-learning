<script setup>
import TestDefineModel from './components/TestDefineModel.vue'
import { ref } from 'vue'

/**
 * defineOptions: 定义组件选项
 */

/**
 * vue3 中的 v-model 和 defineModel
 * 在vue3中，在自定义组件里实现v-model，相当于
 * 1. 定义一个props，名为modelValue
 * 2. 定义一个emit，名为update:modelValue，需要触发该事件
 * 
 * 在 vue 3.4 中，新增了 defineModel 宏函数
 * 1. 在父组件，可以直接通过 v-model 绑定需要传递的数据
 * 2. 在子组件，通过 defineModel()函数，可以直接获取传递的数据
 * 3. 定义一个变量接收，且该变量可以在子组件直接“修改”，不再需要 emit 
 * 
 * 注意：defineModel 宏函数只能在 script setup 语法糖中使用
 */

const txt = ref('123456')


</script>

<template>
  <TestDefineModel v-model="txt"></TestDefineModel>
  {{ txt }}
</template>