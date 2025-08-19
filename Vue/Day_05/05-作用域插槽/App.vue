<!-- 作用域插槽：不是默认插槽、具名插槽的分类；是插槽的一个传参语法 -->
<!-- 作用域插槽：定义slot插槽的同时，是可以传值的。给插槽上可以绑定数据，将来使用组件时可以用。 -->
<template>
  <div>
    <MyTable :data="list">
      <!-- 3. 以template包裹，通过 #slotname="自定义变量名"接受数据，
       其中slotname对于默认插槽则为default，自定义变量名可以使用解构 -->
      <template #default="obj">
        <button @click="del(obj.currRow.id)">删除</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <!-- 解构 -->
      <template #default="{currRow}">
        <button @click="check(currRow)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  components: {
    MyTable
  },
  methods: {
    del(id) {
      // console.log(id);
      this.list = this.list.filter(item => item.id !== id)
    },

    check(currRow) {
      window.alert(`姓名：${currRow.name}，年龄：${currRow.age}`)
    }
  }
}
</script>
