<template>
  <div class="app">
    <div class="base-chart-box">
      这是一个捣乱的盒子，因为我和BaseChart组件的div重名了
      如果用document.querySeletor('classname'),这个盒子就会进行干扰
    </div>
    <BaseChart></BaseChart>
  </div>
</template>

<script>
import BaseChart from './components/BaseChart.vue'
export default {
  components:{
    BaseChart
  }
}
</script>

<style>
.base-chart-box {
  width: 200px;
  height: 100px;
}
</style>