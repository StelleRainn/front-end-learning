<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br/>
      获取标题：{{ title }}
      <br />
      <button @click="changeAfterDelay(888)">1s后变成888</button>
      <br>
      <!-- 导入后直接使用 -->
      数组大于5的部分：{{ filterList }}
    </div>
  </template>

<script>
// 导入模块
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title']),
    ...mapGetters(['filterList'])
  },
  methods: {
    ...mapMutations(['subCountWithParams']),
    ...mapActions(['changeAfterDelay'])
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
