<template>
  <div>
    <!-- 2. 使用组件时，传入具体的标签内容插入 -->
    <MyDialog>你要退出此系统吗</MyDialog>
    <MyDialog>
      你要退出此页面吗
      <div>你要离开吗</div>
      <span>确定关闭此对话吗？你还有尚未保存的任务。</span>
    </MyDialog>
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