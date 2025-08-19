<!-- 具名插槽：一个组件内部有多处结构，需要外部传入标签，进行定制；而默认插槽只有一个定制位置 -->
<!-- 1. 多个slot时, 用name属性区分名字； 一旦插槽起了名字，就是具名插槽，只能定向分发-->
<!-- 2. template配合 v-slot:name 来分发对应标签 -->
<!-- 3. v-slot:name 可以简化为 #name -->

<template>
  <div>
    <MyDialog>
      <template v-slot:header>大标题</template>
      <template v-slot:content>这是一段内容</template>
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>