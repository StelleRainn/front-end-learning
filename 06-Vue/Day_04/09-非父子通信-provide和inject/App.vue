<template>
  <div class="app">
    我是APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
//  provide & inject 作用：跨层级共享数据  
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
  // 父组件 provide 提供数据
  provide () {
    return {
      // 简单类型： 非响应式，数据变化，视图并不会变化
      color: this.color,
      // 复杂类型：响应式，被修改后，视图也会做出变化 → 更推荐使用
      userInfo: this.userInfo
    }
  },

  data() {
    return {
      color: 'pink',
      userInfo: {
        name: 'zs',
        age: 18,
      },
    }
  },

  methods: {
    change() {
      this.color = 'red'
      this.userInfo.name = 'ls'
    },
  },
  components: {
    SonA,
    SonB,
  },
}
</script>

<style>
.app {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
}
</style>