<!-- router-link：声明式导航 / 导航链接 -->
<!-- 功能：用于替换a标签，被解析后渲染出来依然是a标签 -->
<!-- 好处：能跳转，能高亮 -->
<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a> -->

      <!--语法：必须带to属性 -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>

      <!-- 被选中的路由链接，会有两个默认的类名：router-link-exact-active 和 router-link-active -->
      <!-- 区别：exact-active 会精确匹配。 e.g. to="/find" 不会匹配 /find/123 -->
      <!-- 而 active 可以模糊匹配。 e.g. 假如 to="/find" ， 则可以匹配 find/one, find/two 等 -->
      <!-- 故 active 更常用 -->
      <!-- 对该类名添加css效果，即可实现高亮 -->
    </div>
    <div class="top">
      <!-- 路由出口 → 匹配的组件所展示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

/** 添加高亮效果 */
.footer_wrap a.router-link-active {
  background-color: darkcyan;
}

.footer_wrap a:hover {
  background-color: darkcyan;
}
</style>
