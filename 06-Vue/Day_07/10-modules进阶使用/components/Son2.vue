<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br/>
      获取标题：{{ title }}
      <br />
      <button @click="changeAfterDelay(888)">1s后变成888</button>
      <br>
      <!-- 根映射示例 -->
      {{ user }} <br/> {{ user.userInfo.name }} <br>
      <!-- 模块映射 -->
      {{ userInfo.name }}  - {{ userInfo.gender }} - {{ score }} <br>
      {{ theme }} - {{ desc }}
      <br>
      <!-- 演示辅助函数访问 getters -->
      {{ UpperCaseName }}
      <br>
      <!-- 演示辅助函数操作 mutations -->
      <button @click="setInfo({name: 'Rosa', age: 20})">修改名字</button>
      <button @click="setTheme('cyan')">修改主题色</button>
      <!-- 演示辅助函数操作 actions -->
      <button @click="setInfoAfterDelay({ name: 'Rosa', age: 22 })">1s后修改个人信息</button>
    </div>
  </template>

<script>
// 导入模块
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title']),
    ...mapGetters(['filterList']),
    // 多个 mapState 存在是不冲突的, 变量不重名即可
    // 根映射
    ...mapState(['user']),
    // 模块映射
    ...mapState('user', ['userInfo', 'score']),
    ...mapState('setting', ['theme', 'desc']),

    // 访问子模块 getters
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    ...mapMutations(['subCountWithParams']),
    ...mapActions(['changeAfterDelay']),

    ...mapMutations('user', ['setInfo']),
    ...mapMutations('setting', ['setTheme']),

    ...mapActions('user', ['setInfoAfterDelay'])
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
