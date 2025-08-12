<template>
    <!-- 输入框 -->
     <header class="header">
      <h1>小黑记事本</h1>
      <input @keyup.enter="addItem" v-model.trim="addedItem" placeholder="Click here to add reminders" class="new-todo" />
      <button class="add" @click="addItem"  >添加任务</button>
    </header>
</template>

<script>
export default {
  data () {
    return {
      addedItem: ''
    }
  },

  methods: {
    addItem () {
        console.log(this.addedItem);
        
        this.$emit('addItem', this.addedItem)
        this.addedItem = ''
    }
  }

}
</script>

<style>

</style>