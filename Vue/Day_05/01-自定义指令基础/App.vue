<template>
  <div>
    <h1>自定义指令</h1>
    <!-- <input type="text" v-focus> -->
    <h4 v-color="color1" >color 1</h4>
    <h4 v-color="color2" >color 2</h4>
  </div>
</template>

<script>

export default {

  // 2. 自定义指令-基础语法-局部注册
  // directives: {
  //   focus: {
  //     inserted (el) {
  //       el.focus()
  //     }
  //   }
  // }

  // 3. 自定义指令-指令的值
  directives: {
    color: {
      // 1. inserted 提供的是元素被添加到页面中时的逻辑
      inserted (el, binding) {
        // 通过 binding.value 可以拿到指令的值
        el.style.color = binding.value
      },

      // update钩子 在指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update (el, binding) {
        el.style.color = binding.value
      }
    }
  },

  data () {
    return {
      color1: 'red',
      color2: 'green',
    }
  }

}
</script>

<style>

</style>