<template>
  <div id="app">
    <!-- 引入后，当成 HTML 标签使用 -->
    <!-- 头部 -->
    <RainnHeader></RainnHeader>

    <!-- 主要 -->
    <RainnMain></RainnMain>

    <!-- 尾部 -->
    <RainnFooter></RainnFooter>
  </div>
</template>

<script>
// 引入 components 文件夹下的各组件
import RainnHeader from './components/RainnHeader.vue';
import RainnMain from './components/RainnMain.vue';
import RainnFooter from './components/RainnFooter.vue';

export default {
  // 局部注册：只能在注册的组件内使用
 components : {
    // 可以使用同名变量简写
    RainnHeader: RainnHeader,
    RainnMain,
    RainnFooter
 }
}
</script>

<style>
#app {
    width: 400px;
    height: 500px;
    background-color: darkcyan;
    margin: 0 auto;
    padding: 10px;
}
</style>
