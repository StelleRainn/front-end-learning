<!-- 以son2为例，演示mapActions的使用 -->
<template>
  <div id="app">
    <h1>根组件 - {{ count }} - {{ title }}</h1>
    <input type="text" :value="count" @input="changeCount" >
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'

import { mapState } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  components: {
    Son1,
    Son2
  },
  created () {
    console.log(this.$store.state.count)
  },
  computed: {
    ...mapState(['count', 'title'])
  },

  methods: {
    // 通过事件e获取输入值
    changeCount (e) {
      // 转换为数字类型
      const num = +e.target.value
      this.$store.commit('changeCount', num)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
