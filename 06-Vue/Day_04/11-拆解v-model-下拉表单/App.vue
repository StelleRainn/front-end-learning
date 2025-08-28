<template>
  <div class="app">
     <!-- @changeID="selectId = 新值" ，$event 获取事件形参，恰好是对应的新的值-->
    <BaseSelect :cityID="selectId" @changeID="selectId = $event"></BaseSelect>
  </div>
</template>

<script>
// v-model原理深入：以表单元素为例
// 在子组件，使用v-model直接绑定来自父组件的数据，会引发操纵数据的报错
// 所以，要通过v-model拆解绑定数据

import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>