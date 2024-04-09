import { App } from 'vue'
import VathWaveLayer from './src/index.vue'
export * as __VathWaveLayer from './src/types'

VathWaveLayer.install = (app: App): void => {
  app.component(VathWaveLayer.name, VathWaveLayer)
}
export {
  VathWaveLayer,
}
export default VathWaveLayer
