<template>
  <div class="search">
    <!-- 接收参数 -->
    <p>搜索关键字 (动态路由) : {{ $route.params.words }}</p>
    <p>搜索结果:</p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyFriend",
  // 在js中获取参数，需要加上 this 关键字
  created() {
    console.log(this.$route.params.words);
  },
};
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>
