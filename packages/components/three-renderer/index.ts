import { App } from 'vue'
import VaThreeRenderer from './src/index.vue'
export * as __VaThreeRenderer from './src/types'
export * from './src/core'

VaThreeRenderer.install = (app: App): void => {
  app.component(VaThreeRenderer.name, VaThreeRenderer)
}
export {
  VaThreeRenderer,
}
export default VaThreeRenderer
