<template>
  <div>
    <!-- <h1 >自定义指令</h1>
    <input v-focus type="text"> -->
    <br>
    <br>

    <h1 v-color="color1">指令的值-测试1</h1>
    <h1 v-color="color2">指令的值-测试2</h1>
  </div>
</template>

<script>
export default {

// 2. 自定义指令-基础语法-局部注册
// directives: {
//   // 指令名：指令配置项
//   focus: {
//     inserted (el) {
//       el.focus()
//     }
//   }
// }

// 3. 自定义指令-指令的值
// 语法：在绑定指令时，可以通过等号的形式为指令绑定具体的参数值 → v-指令名="指令值"
// 通过 binding.value 可以拿到指令值; 指令值修改会触发 update 函数 
directives: {
  color: {
    inserted (el, binding) {
      console.log(el, binding.value);
      el.style.color = binding.value
    },

    // update 指令在指令的值被修改时触发，函数内部提供 dom 更新的逻辑
    update (el, binding) {
      el.style.color = binding.Value
    } 
  }
},

data () {
  return {
    color1: 'red',
    color2: 'cyan',
  }
}
}
</script>

<style>

</style>