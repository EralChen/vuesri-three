import { App } from 'vue'
import VathWallLayer from './src/index.vue'
export * as __VathWallLayer from './src/types'

VathWallLayer.install = (app: App): void => {
  app.component(VathWallLayer.name, VathWallLayer)
}
export {
  VathWallLayer,
}
export default VathWallLayer
