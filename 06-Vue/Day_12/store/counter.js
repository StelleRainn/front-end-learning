import { defineStore } from "pinia"
import { computed, ref } from "vue"


//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// 第二个参数，若要使用选项式API，则提供对象；若要使用组合式API，则提供一个函数，并在最后通过return向外暴露

export const useCounterStore = defineStore('counter', () => {
  // state → ref()
  const countA = ref(100)

  // actions → function()
  const add = () => countA.value += 1
  const sub = () => countA.value -= 1

  // getters → computed()
  const doubleCountA = computed( () => countA.value * 2)

  return { countA, add, sub, doubleCountA }

  // 第三个参数：持久化
}, {
  // persist: true // 默认持久化，以 store.$id 作为 key，将所有属性保存到 localStorage 中
  // 可以自定义相关配置，例如
  persist: {
    key: 'custom-name-counter',
    pick: ['countA']
  }
})