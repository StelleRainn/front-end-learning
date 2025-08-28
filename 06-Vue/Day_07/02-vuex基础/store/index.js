import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 初始化
const store = new Vuex.Store({

  strict: true,
  // 可以通过Store中的state提供数据
  // 而后在所有组件中，通过$store.state.xxx访问数据
  // 也可以用辅助函数 mapstate() 进行数据的获取
  state: {
    count: 100,
    title: '大标题'
  },

  // state提供数据，而mutations提供操作数据的方法
  mutations: {
    // 所有mutation函数的第一个参数都是state
    addCount (state) {
      state.count += 1
    },
    addCountFive (state) {
      state.count += 5
    },
    changeTitle (state) {
      state.title = '小标题'
    }
  }
})

export default store
