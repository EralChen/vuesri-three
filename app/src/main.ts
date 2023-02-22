import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import { VkSvgIcon } from '@vunk/core'
import ElementPlus from 'element-plus'
import * as ElIconsVue from '@element-plus/icons-vue'
import PageX from '_c/PageX/index.vue'
// 初始化 api 配置
import '@/api'

import 'virtual:svg-icons-register'
// import './permission'
import './styles'
import 'uno.css'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ElementPlus)
  .component('SvgIcon', VkSvgIcon)
  .component('PageX', PageX)
  .mount('#app')


for (const [key, component] of Object.entries(ElIconsVue)) {
  app.component(key, component)
}