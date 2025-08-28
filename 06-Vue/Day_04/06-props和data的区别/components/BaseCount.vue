<template>
  <div class="base-count">

    <!-- 会报错提示：Unexpected mutation of "count" prop  vue/no-mutating-props -->
    <!-- <button @click="count--">-</button> -->
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <!-- <button @click="count++">+</button> -->
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便修改（谁的数据, 谁负责）
  // data () {
  //   return {
  //     count: 100,
  //   }
  // },

  // 2.外部传过来的数据 不能随便修改
  props: {
    count: Number,
  },

  methods : {
    handleSub () {
      this.$emit('change', this.count - 1)
    },
    handleAdd () {
      this.$emit('change', this.count + 1)

    }
  },

  // 补充概念：单向数据流
  // 父组件通过props传递数据给子组件，子组件不能直接修改props中的数据，只能通过触发事件的方式通知父组件修改数据
  // 父组件修改数据后，会向下流动，会通过props传递给子组件，子组件再根据新的数据进行渲染
  // 这个数据流动是单向的。
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>