<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: {{ $store.state.count }}<label></label>
    <br>
    <!-- 原生访问模块中的 state -->
    {{ $store.state.user.userInfo.name }} -
    {{ $store.state.user.score }} -
    {{ $store.state.setting.theme }}
    <br>
    <!-- 原生访问模块中的 getters -->
    {{ $store.getters['user/UpperCaseName'] }}
    <!-- 原生操作子模块的 mutations -->
    <button @click="changeInfo">修改名字</button>
    <button @click="changeTheme">修改主题色</button>
    <br>
    <!-- 原生操作模块中的 actions -->
    <button @click="changeInfoAfterDelay">1s后修改个人信息</button>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    changeInfo () {
      this.$store.commit('user/setInfo', {
        name: 'Rosa',
        age: 22
      })
    },
    changeTheme () {
      this.$store.commit('setting/setTheme', 'darkcyan')
    },
    changeInfoAfterDelay () {
      this.$store.dispatch('user/setInfoAfterDelay', {
        name: 'Rosa',
        age: 23
      })
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>
