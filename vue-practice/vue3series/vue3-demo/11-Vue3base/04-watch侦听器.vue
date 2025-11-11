<script setup>
  /**
   * watch 侦听器
   * 
   * 1. 监测一个数据的变化
   * watch( ref对象, (newVal, oldVal) => { ... })
   * 
   * 2. 监测多个数据的变化
   * watch([ref1, ..., refn], (newValArray, oldValArray) => { ... })
   */

  import { ref, watch } from 'vue'

  const count = ref(0)
  const name = ref('Rainn')

  // watch (count, (newVal, oldVal) => {
  //   console.log('新值：', newVal, '旧值：', oldVal)
  // }) 

  // watch ([count, name], (newValArray, oldValArray) => {
  //   console.log('新值组：',newValArray,'旧值组：', oldValArray)    
  // })

  const changeCount = () => {
    count.value++
  }

  const changeName = () => {
    name.value = 'Rosa'
  }

  /**
   * 3. immediate & deep → 写在第三个对象参数中
   */
  watch(name, (newVal, oldVal) => { console.log(newVal, oldVal)}, { immediate: true })

  /**
   * 4. deep 深度监听
   * watch默认为浅层监听，可以监听简单数据
   * 但无法直接监听复杂类型数据的变化 → 监听的是地址，即 refObj.value，除非整个对象修改了，否则监听无法生效
   * 要想监听复杂数据类型中的子属性的变化，可以设置 deep: true
   */

  const userInfo = ref({
    name: 'StelleRainn',
    age: 21
  })
  watch(userInfo, (newVal, oldVal) => { console.log('new: ', newVal, 'old: ', oldVal)}, { deep: true } )
  const changeUserInfo = () => userInfo.value.name = 'Rosa Mizukawa'

  /**
   * 5. 不开启 deep， 实现精确侦听
   * watch ( ()=> refObj.value.property, callback Fn )
   */

  watch ( () => userInfo.value.name, (newVal, oldVal) => { console.log('Precise new: ', newVal, ' Precise old: ', oldVal) } )
</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">changeCount</button>
  <div>{{ name }}</div>
  <button @click="changeName">changeName</button>
  <div>{{ userInfo }}</div>
  <button @click="changeUserInfo">changeUserInfo</button>
</template>