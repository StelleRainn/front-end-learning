<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>

    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
/**
 * Vue是异步更新DOM的，
 * 想要在DOM更新完成之后再做某事，可以使用$nextTick
 * this.$nextTick( callbackFn )
 */
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
   handleEdit () {
    this.isShowEdit = true
    this.$nextTick(() => {
      this.$refs.inp.focus()
    })
   }
  },
}
</script>

<style>
</style>