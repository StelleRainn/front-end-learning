import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 初始化
const store = new Vuex.Store({
  strict: true,

  state: {
    count: 100,
    title: '大标题',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    changeCount (state, n) {
      state.count = n
    }
  },

  actions: {
    changeAfterDelay (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },

  getters: {
    // 第一个参数，依然是 state
    filterList (state) {
      // 必须要有返回值
      return state.list.filter(item => item > 5)
    }
  }
})

export default store
