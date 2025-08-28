<template>
  <div class="app">
    <!-- Prop 定义：组件上的注册的一些自定义属性 -->
    <!-- 作用：向子组件传递数据 -->
    <!-- 特点：可以传递任意数量、任意类型的 prop -->
    <UserInfo :username="username" :age="age" :isSingle="isSingle" :car="car" :hobby="hobby"></UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'
export default {
  data() {
    return {
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马',
      },
      hobby: ['篮球', '足球', '羽毛球'],
    }
  },
  components: {
    UserInfo,
  },
}
</script>

<style></style>