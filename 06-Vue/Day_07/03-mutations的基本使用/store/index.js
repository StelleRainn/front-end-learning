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
  // 定义mutations对象，对象中存放修改state的方法
  mutations: {
    // 所有mutation函数的第一个参数都是state
    // 可以再携带至多一个参数，该参数可以是简单数据类型或复杂数据类型，又被称为提交载荷payload
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
    }
  }
})

export default store
