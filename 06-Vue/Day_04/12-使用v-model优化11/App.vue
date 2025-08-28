<template>
  <div class="app">
    <!-- @changeID="selectId = 新值" ，$event 获取事件形参，恰好是对应的新的值-->
    <!-- <BaseSelect :cityID="selectId" @changeID="selectId = $event"></BaseSelect> -->

    <!-- 因为本质是 :value +  -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
// 如果想要在父组件使用 v-model，需要子配合，包括
// 子组件的props通过value接受，input事件通知(v-model本质： :value + @input)
// 父组件直接使用 v-model 绑数据

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