<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br>
      <button @click="changeTo666afterDelay(666)">1s后变成666</button>
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
    // 调用 actions
    // this.$store.dispath('actionName', params)
    changeTo666afterDelay (n) {
      this.$store.dispatch('changeAfterDelay', n)
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
