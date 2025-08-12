<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHead @addItem="handleAdd"></TodoHead>
    <TodoMain :list="list" @delItem="handleDel"></TodoMain>
    <TodoFooter :list="list" @emptyItems="emptyItems"></TodoFooter>
  </section>
</template>

<script>
import TodoHead from './components/TodoHead.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

/*
  1. 渲染待办任务：
    提供数据：由父组件提供公共数据，子组件通过props接收数据
    渲染数据：根据接收的数据利用 v-for 循环渲染数据
  2. 添加任务：
    收集表单数据：利用 v-model 指令收集表单数据
    监听事件，回车和点击都要添加
    子传父，将任务名称传给父组件App.vue
    进行添加 unshift 
  3. 删除功能：
    监听事件（删除的点击），返回id
    子传父，由父组件进行删除 → filter 方法
  4. 底部的合计功能：
    父传子渲染即可
  5. 清空功能：
    子传父，通知 App.vue 清空数组
  6. 持久化存储：
    watch 侦听 list 的变化，实时存储
    
*/

export default {
  components: {
    TodoHead,
    TodoMain,
    TodoFooter,
  },
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        {id: 1, name: 'Code'},
        {id: 2, name: 'Eat'},
        {id: 3, name: 'Sleep'},
        {id: 4, name: 'Exercise'},
        {id: 5, name: 'Music'},
      ],
    }
  },
  methods: {
    handleAdd (value) {
      if (!value) {
        alert('fatal: content must not be empty!')
        return
      }
      this.list.unshift({
        id: +new Date(),
        name: value
      })
    },

    handleDel (value) {
      if (confirm('Are you sure to delete item?')) {
        this.list = this.list.filter(item => item.id !== value)
      }
    },

    emptyItems() {
      this.list = []
    }
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler () {
        localStorage.setItem('list', JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>
