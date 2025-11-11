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
      // vuex同样遵循单向数据流，数据的修改应当被统一管理
      // 以下自增操作虽然可以运行，但不符合ESLint规范，是一种错误代码
      // this.$store.state.count++
      // console.log(this.$store.state.count)

      // 解决此问题，可以在@/store/index.js中的配置添加strict模式，这样vuex就会检测该语法错误
      // 这有利于初学者学习，但strict模式在上线时应当关闭

      // 更标准的做法，是通过接下来的mutation操作完成
      // 在 @store/index.js中配置mutations，然后再此处（或其他地方）调用
      // this.$store.commit('mutation函数名')
      // this.$store.commit('mutation函数名', 参数)
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
