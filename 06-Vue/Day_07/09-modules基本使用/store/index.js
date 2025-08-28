import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import settings from './modules/setting'

// 插件安装
Vue.use(Vuex)

// 初始化
const store = new Vuex.Store({
  strict: true,

  // 核心概念1：state
  state: {
    count: 100,
    title: '大标题',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },

  // 核心概念2：mutations
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

  // 核心概念3：actions
  actions: {
    changeAfterDelay (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },

  // 核心概念4：getters
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },

  // 核心概念5：modules
  modules: {
    user,
    settings
  }
})

export default store
