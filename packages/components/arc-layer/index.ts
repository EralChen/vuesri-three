import { App } from 'vue'
import VathArcLayer from './src/index.vue'
export * as __VathArcLayer from './src/types'

VathArcLayer.install = (app: App): void => {
  app.component(
    VathArcLayer.name || 'VathArcLayer', 
    VathArcLayer
  )
}
export {
  VathArcLayer,
}
export default VathArcLayer
