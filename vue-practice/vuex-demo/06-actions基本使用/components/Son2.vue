<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br/>
      获取标题： {{ title }}
      <br />
      <!-- <button @click="handleSubWithParams(1)">值 - 1</button>
      <button @click="handleSubWithParams(5)">值 - 5</button>
      <button @click="handleSubWithParams(10)">值 - 10</button> -->

      <!-- 直接当成methods使用，并携带参数 -->
      <button @click="subCountWithParams(1)">值 - 1</button>
      <button @click="subCountWithParams(5)">值 - 5</button>
      <button @click="subCountWithParams(10)">值 - 10</button>
    </div>
  </template>

<script>
// 导入模块
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    // handleSubWithParams (n) {
    //   this.$store.commit('subCountWithParams', n)
    // }

    // 近乎和 mapState 一样的操作
    // 数组内填入在 @/store/index.js 中所配置的 mutation 函数名
    ...mapMutations(['subCountWithParams'])
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
