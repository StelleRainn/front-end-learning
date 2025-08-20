<!-- 查询参数传参 -->
<!-- 语法： to="/path?参数名1=value1&参数名2=value2" -->
<!-- 在对应组件页面接收值： $route.query.参数名 -->
<!-- 比较适合传多个参数 -->

<!-- 动态路由传参 -->
<!-- 语法： to="path/参数值" -->
<!-- 在对应路由的界面接收值： $route.params.参数名 -->
<!-- 需要在路由配置中配置动态路由，参数名要一致; 问号表示参数是可选的，不加问号则必须要传参 -->
<!-- e.g. { path: 'find/:words?', components: xxx }  → $route.params.words -->
<!-- 在传单个参数时十分方便 -->

<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text" />
      <button>搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <router-link to="/search?key=黑马程序员">黑马程序员</router-link>
      <router-link to="/search?key=前端培训">前端培训</router-link>
      <router-link to="/search?key=如何成为前端大牛"
        >如何成为前端大牛</router-link
      >
    </div>
    <div class="hot-link">
      热门搜索：
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindMusic",
};
</script>

<style>
.logo-box {
  height: 150px;
  background: url("@/assets/logo.jpeg") no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>
