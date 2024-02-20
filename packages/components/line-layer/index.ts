import { App } from 'vue'
import VaLineLayer from './src/index.vue'
export * as __VaLineLayer from './src/types'

VaLineLayer.install = (app: App): void => {
  app.component(VaLineLayer.name, VaLineLayer)
}
export {
  VaLineLayer,
}
export default VaLineLayer
