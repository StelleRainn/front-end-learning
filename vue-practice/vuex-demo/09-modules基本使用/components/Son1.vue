<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: {{ $store.state.count }}<label></label>
      <br>
      <!-- 访问语法：$store.getters.方法名 -->
      数组大于5的部分: {{ $store.getters.filterList }}
    </div>
  </template>

<script>
export default {
  name: 'Son1Com'

}
</script>

  <style lang="css" scoped>
  .box{
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>
