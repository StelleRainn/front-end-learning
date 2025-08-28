<template>
  <div class="app">
    <button @click="isShow = true">退出按钮</button>
    <!-- :props.sync="变量" -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
/**
 * sync修饰符：
 *  作用：可以实现子组件和父组件的双向绑定，简化代码
 *  特点：props属性名可以自定义，不一定是value
 *  本质： :属性名 + @update:属性名 合写
 *  以封装弹框类组件为例，visible属性，true显示，false隐藏
 */

import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>