// user 配置
const state = {
  userInfo: {
    name: 'StelleRainn',
    age: 18,
    gender: 'male'
  },
  score: 100
}
const mutations = {
  setInfo (state, newInfo) {
    state.userInfo = newInfo
  }
}
const actions = {
  setInfoAfterDelay (context, newInfo) {
    // 之前有提到，context 可以理解为 store
    // 实际上是因为其位于根模块
    // 而在这里，context，上下文，实际指代的就是本模块
    // 默认提交的就是自己的 action 和 mutation
    // 故不用死记硬背，根据实际项目做出必要改变
    setTimeout(() => {
      context.commit('setInfo', newInfo)
    }, 1000)
  }
}
const getters = {
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
