<script setup>
import { inject } from 'vue'

const themeColor = inject('themeColor')

const responsiveValue = inject('responsiveValue')

const valueAdd = inject('valueAdd')

const valueDel = inject('valueDel')


</script>

<template>
  <div class="bottom">
    <h3>This is the top compo.</h3>
    <div>Receiving data from higher components: </div><br>
    {{ themeColor }} - {{ responsiveValue }} <br>
    <button @click="valueAdd(100)">Add 100</button>
    <button @click="valueDel(50)">Del 50</button>
  </div>
</template>

<style scoped>
.bottom {
  border: 1px solid #000;
  background-color: darkcyan;
}
</style>