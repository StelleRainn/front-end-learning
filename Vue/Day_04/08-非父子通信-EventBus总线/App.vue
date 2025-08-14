<template>
  <div class="app">
    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>
  </div>
</template>

<script>
// p.s. eventbus总线适合非父子组件之间进行简易消息传递；后续复杂场景使用VueX
import BaseA from './components/BaseA.vue'
import BaseB from './components/BaseB.vue'
import BaseC from './components/BaseC.vue'
export default {
  components:{
    BaseA,
    BaseB,
    BaseC
  }
}
</script>

<style>

</style>