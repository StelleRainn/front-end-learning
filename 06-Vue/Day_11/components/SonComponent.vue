<script setup>
/**
 * 父传子 - 2.
 * 子组件：通过props接收，但和Vue2有所不同
 * setup 中无法直接配置 props 选项
 * 因此需要借助 “编译器宏” 函数接收子组件的数据
 */
const props = defineProps({
  count: Number,
  car: String
})
// 通过 props.xxx 访问数据
console.log(props.count, props.car)

/**
 * 子传父 - 1.
 * 和 Vue 2的思想相同
 * 通过在子组件中使用 emit 触发事件并传递参数
 * 然后父组件在对应监听事件中利用参数并对数据做出修改
 * 
 * 需要使用 defineEmits 宏编译器生成 emit 方法
 */

// 显示声明父组件中对应的监听事件
const emit = defineEmits(['consumeCount'])

// 触发事件，通知父组件的监听事件，传递参数
const consumeCountMsg = () => {
  emit('consumeCount', 5)
}


</script>

<template>
  <div class="son">
    <!-- template 可以自动解离ref对象的封装 -->
    This is the son component, receiving data of Father component via props: <br/>
    count: {{ count }}, car: {{ car }} 
    <br>
    <button @click="consumeCountMsg">consumeCount</button>
  </div>
</template>

<style scoped>
.son {
  background-color: cyan;
  border: 1px solid #000;
  padding: 30px;
  margin-top: 30px;
}
</style>