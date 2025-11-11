<!-- modules的基本使用 -->
<!-- 在 @/store下创建 modules 文件夹，里面各自创建不同模块的 js 代码 -->
<!-- 每个 js 代码包含自己的 state，mutations，actions和getters，然后使用 export default 导出配置对象 -->
<!-- 然后，在 @/store/index.js 中分别引入每个模块，并在 modules 选项中配置 -->
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
