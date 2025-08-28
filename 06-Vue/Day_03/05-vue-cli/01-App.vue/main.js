// 文件核心作用：导入 App.vue，基于 App.vue 创建结构渲染 index.html

// 1. 导入 Vue 核心包
import Vue from 'vue'

// 2. 导入 App.vue 组件
import App from './App.vue'

// 提示：当前处于什么环境（生产/开发）
Vue.config.productionTip = false

// 3. Vue 实例化，提供 render 方法 → 基于 App.vue 创建结构渲染 index.html 
new Vue({
  render: h => h(App),
  // render 相当于
  // render: (createElement) => {
  //   return createElement(App)
  // }

  // $mount 相当于 el: '#app'
}).$mount('#app')
