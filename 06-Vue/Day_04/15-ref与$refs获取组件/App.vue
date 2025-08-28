<template>
  <div class="app">
    <h4>父组件 -- <button>获取组件实例</button></h4>
    <!-- 为需要的目标组件添加ref属性 -->
    <BaseForm ref="baseForm"></BaseForm>
    <div>
      <button @click="handleGetData">获取数据</button>
      <button @click="handleResetData">重置数据</button>
    </div>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
    // 通过 this.$refs.xxx.methods()调用组件内部的方法
   handleGetData () {
    this.$refs.baseForm.getFormData()
   },
   handleResetData () {
    this.$refs.baseForm.resetFormData()
   }
  }
}
</script>

<style>
</style>