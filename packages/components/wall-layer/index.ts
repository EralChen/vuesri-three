import { App } from 'vue'
import VaWallLayer from './src/index.vue'
export * as __VaWallLayer from './src/types'

VaWallLayer.install = (app: App): void => {
  app.component(VaWallLayer.name, VaWallLayer)
}
export {
  VaWallLayer,
}
export default VaWallLayer
