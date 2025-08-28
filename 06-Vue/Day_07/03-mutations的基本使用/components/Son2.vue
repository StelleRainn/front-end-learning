<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br/>
      获取标题： {{ title }}
      <br />
      <button @click="handleSubWithParams(1)">值 - 1</button>
      <button @click="handleSubWithParams(5)">值 - 5</button>
      <button @click="handleSubWithParams(10)">值 - 10</button>
    </div>
  </template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    handleSubWithParams (n) {
      this.$store.commit('subCountWithParams', n)
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
