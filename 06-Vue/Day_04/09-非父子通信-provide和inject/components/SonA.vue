<template>
  <div class="SonA">我是SonA组件
    <GrandSon></GrandSon>
    {{ color }} - {{ userInfo.name }} - {{ userInfo.age }}
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue'
export default {
  // 子孙组件 inject 取值使用
  inject: ['color', 'userInfo'],

  components: {
    GrandSon,
  }
}
</script>

<style>
.SonA {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 200px;
}
</style>