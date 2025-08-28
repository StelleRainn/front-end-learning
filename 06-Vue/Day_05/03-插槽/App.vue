<!-- 插槽作用：让组件内部的“一些结构“支持自定义 -->

<template>
  <div>
    <!-- Step 2. 在使用时的组件标签内填入内容，包括纯文字、标签等；如果没有内容，则展示默认值 -->
    <MyDialog></MyDialog>
    <MyDialog>你确认要删除吗？</MyDialog>
    <MyDialog>你确认要退出本系统么?</MyDialog>
    <MyDialog><div> Are you sure to quit this system? </div></MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>