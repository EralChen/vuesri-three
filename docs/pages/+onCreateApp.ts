import ElmentPlus from 'element-plus'
import { VkClientOnly } from '@vunk/core/components/client-only'
import type { OnCreateAppSync } from 'vike-vue'
import VpDemo from '../vitepress/components/vp-demo.vue'



export const onCreateApp: OnCreateAppSync = (pageContext) => {
  const { app } = pageContext 
  app.use(ElmentPlus)
  app.component('Demo', VpDemo)
  app.component('ClientOnly', VkClientOnly)

}

