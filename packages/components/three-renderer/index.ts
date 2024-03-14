import { App } from 'vue'
import VathThreeRenderer from './src/index.vue'
export * as __VathThreeRenderer from './src/types'
export * from './src/core'

VathThreeRenderer.install = (app: App): void => {
  app.component(
    VathThreeRenderer.name || 'VathThreeRenderer', VathThreeRenderer,
  )
}
export {
  VathThreeRenderer,
}
export default VathThreeRenderer
