<!-- modules的进阶使用：访问模块的 state 数据 -->
<!-- 尽管已经分模块了，但其实子模块的状态，还是会被挂到根级别的 state 当中，属性名就是模块名 -->
<!-- 在 son1 演示原生语法，在 son2 演示 mapState 语法 -->
<!-- 原生语法：$store.state.模块名.xxx -->
<!-- mapState语法：分为根映射和模块映射 -->
<!-- 根映射：和之前一样，直接在 mapState([])中填入模块名 -->
<!-- 模块映射：需要在子模块的导出选项中配置 namespaced:true, 即：开启命名空间
然后在mapState中指定子模块的名称, 如 mapState('user', ['userInfo', 'score']) -->

<!-- modules 进阶：访问 getters -->
<!-- 依然是两种访问方法 -->
<!-- 原生语法： $store.getters['模块名/方法名'] -->
<!-- 之所以能用方括号，是因为对于 getters 对象而言，模块名/方法名 是其中的一个属性，同时带有特殊符号，故而不能使用点语法访问 -->
<!-- mapGetters方法: 和访问 State 一致 -->
<!-- 在子模块中要有对应的 getters 配置 -->

<!-- modules 进阶：访问 mutations -->
<!-- 两种方法 -->
<!-- 原生语法：$store.commit('模块名/mutation名', extra_params ) -->
<!-- mapMutations方法：和之前的其他核心概念大抵一致 -->
<!-- 同样地，在子模块中，要有对应的 mutations 配置-->

<!-- modules 进阶：访问 actions -->
<!-- 和访问 mutations 基本一致 -->
<!-- 原生语法：$store.dispatch('模块名/action名', extra_params ) -->

<template>
  <div id="app">
    <h1>根组件 - {{ count }} - {{ title }}</h1>
    <input type="text" :value="count" @input="changeCount">
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
    return {}
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
