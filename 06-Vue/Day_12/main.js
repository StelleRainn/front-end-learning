import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 在 pinia 实例中，添加持久化插件
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)


app.use(pinia).mount('#app')
