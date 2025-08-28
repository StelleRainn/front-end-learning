<template>
  <div>
    <!-- <select v-model="cityID"> -->
    <!-- 导致：Unexpected mutation of "cityID" prop -->
    <select :value="value" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },

  // 通知父组件以修改
  methods: {
    handleChange (e) {
      // 通过事件的target.value取到最新值
      console.log(e.target.value)
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
</style>