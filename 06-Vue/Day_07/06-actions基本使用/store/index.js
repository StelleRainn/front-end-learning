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
    changeCount (state, n) {
      state.count = n
    }
  },

  // mutations 必须是同步的，便于监测数据变化
  // 故提供 actions，以处理异步请求
  // 注意：依旧不能直接操作 state，仍然通过 commit mutations完成
  actions: {
    // context：上下文，由于未分模块，此处可以理解为 store
    changeAfterDelay (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  }
})

export default store
