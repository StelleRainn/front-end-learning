<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: {{ $store.state.count }} - {{ count }}<label></label>
      <br>
      <button @click="handleClick">值 + 1</button>
      <button @click="changeTitle">改成小标题</button>
      <button @click="handleClikWithParams(10)">值 + 10</button>
      <button @click="handleClikWithParams(20)">值 + 20</button>
    </div>
  </template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Son1Com',
  created () {

  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleClick () {
      this.$store.commit('addCount')
    },
    handleClikWithParams (n) {
      this.$store.commit('addCountWithParams', {
        count: n,
        msg: 'a test message'
      })
    },
    changeTitle () {
      this.$store.commit('changeTitle')
    }
  }

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
