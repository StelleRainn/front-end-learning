<template>
  <div class="grandSon">
    我是GrandSon
    {{ color }} - {{ userInfo.name }} - {{ userInfo.age }}
  </div>
</template>

<script>
export default {
  // 子孙组件 inject 取值使用
  inject: ['color', 'userInfo'],
}
</script>

<style>
.grandSon {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 100px;
}
</style>