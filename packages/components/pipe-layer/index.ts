import { App } from 'vue'
import VathPipeLayer from './src/index.vue'
export * as __VathPipeLayer from './src/types'

VathPipeLayer.install = (app: App): void => {
  app.component(VathPipeLayer.name, VathPipeLayer)
}
export {
  VathPipeLayer,
}
export default VathPipeLayer
