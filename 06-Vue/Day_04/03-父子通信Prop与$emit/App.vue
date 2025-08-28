<template>
  <div style="border: 3px solid cyan; margin: 10px; text-align: center;">
    <h1>我是父组件</h1>
    <!-- 父传子：1. 给组件标签添加 自定义动态属性 的方式传值 -->
    <!-- II. 父组件监听事件，事件名要与 son component 的事件名同名  -->
    <SonComponent :title="fatherMsg" @changeTitle="changeFn"></SonComponent>
  </div>
</template>

<script>
import SonComponent from './components/SonComponent.vue'
export default {
  components: {
    SonComponent
  },

  data() {
    return {
      fatherMsg: '我是父组件的消息'
    }
  },

  methods: {
    // III. 提供对应的处理函数，修改消息；形参可以拿到新消息
    changeFn(newMsg) {
      this.fatherMsg = newMsg
    }
  }
}
</script>

<style></style>