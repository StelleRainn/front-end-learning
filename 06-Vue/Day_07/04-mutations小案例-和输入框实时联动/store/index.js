import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 初始化
const store = new Vuex.Store({

  strict: true,
  state: {
    count: 100,
    title: '大标题'
  },
  mutations: {
    addCount (state) {
      state.count += 1
    },
    changeTitle (state) {
      state.title = '小标题'
    },
    addCountWithParams (state, obj) {
      console.log(obj)
      state.count += obj.count
    },
    subCountWithParams (state, n) {
      state.count -= n
    },

    // 和输入框实时联动
    changeCount (state, n) {
      state.count = n
    }
  }
})

export default store
