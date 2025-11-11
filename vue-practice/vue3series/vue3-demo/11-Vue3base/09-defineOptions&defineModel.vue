<script setup>
import TestDefineModel from './components/TestDefineModel.vue'
import { ref } from 'vue'

/**
 * defineOptions: 定义组件选项
 * 
 * 背景说明：
有\<script setup> 之前，如果要定义 props, emits 可以轻而易举地添加一个与 setup 平级的属性。 
但是用了 \<script setup> 后，就没法这么干了， setup 属性已经没有了，自然无法添加与其平级的属性。
---
为了解决这一问题，引入了 defineProps 与 defineEmits 这两个宏。但这只解决了 props 与 emits 这两个属性。
如果我们要定义组件的 name 或其他自定义的属性，还是得回到最原始的用法——再添加一个普通的 \<script> 标签。
这样就会存在两个 \<script> 标签。让人无法接受。
---
所以在 Vue 3.3 中新引入了 defineOptions 宏。
顾名思义，主要是用来定义 Options API 的选项。可以用 defineOptions 定义任意的选项，
props, emits, expose, slots 除外（因为这些可以使用 defineXXX 来做到）
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