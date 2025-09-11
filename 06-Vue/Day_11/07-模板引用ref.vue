<script setup>
import { onMounted, ref } from 'vue';
import TestCom from './components/TestCom.vue';

/**
 * 模板引用 ref 
 * 
 * 定义：通过 ref 标识获取真实的 dom 对象或组件实例对象
 * 
 * 以获取dom对象为例，组件实例同理：
 * 1. 调用 ref 函数得到 ref 对象
 * 2. 通过 ref 标识绑定 ref 对象
 * 3. 通过 ref对象.value 即可访问到dom对象
 * 
 * 注意获取模板引用的时机：在dom/组件挂载完毕后
 * 
 * ------------------------------------
 * 
 * defineExpose 宏函数
 * 默认情况下在 script setup 语法糖中，组件内部的属性和方法不开放给父组件访问
 * 可以使用 defineExpose 编译宏指定哪些属性或方法可以开放给父组件
 * 
 */

const inp = ref(null)

onMounted(()=>{
  console.log(inp.value) // <input type="text">
  // 一到页面就聚焦
  // inp.value.focus()
})

// 点击聚焦
const toFocus = () => {
  inp.value.focus()
}




// 获取子组件及其内部属性/方法
const testcom = ref(null)

const callTest = () => {
  console.log(testcom.value) // Proxy(Object){count: RefImpl, __v_skip: true, testFn: ƒ}
  console.log(testcom.value.count) // 100
  testcom.value.testFn() // The fucntion has been called
}

</script>

<template>
  <!-- 通过 ref 标识绑定已经定义好的 ref 对象 -->
  <input type="text" ref="inp">
  <button @click="toFocus">Click to focus</button>
  <TestCom ref="testcom"></TestCom>
  <button @click="callTest">Click to access the sub compo</button>
</template>