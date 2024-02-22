import { App } from 'vue'
import VaEntityLayer from './src/index.vue'
export * as __VaEntityLayer from './src/types'

VaEntityLayer.install = (app: App): void => {
  app.component(VaEntityLayer.name, VaEntityLayer)
}
export {
  VaEntityLayer,
}
export default VaEntityLayer
