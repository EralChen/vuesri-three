import { App } from 'vue'
import VathThreeRendererEvents from './src/index.vue'
export * as __VathThreeRendererEvents from './src/types'

VathThreeRendererEvents.install = (app: App): void => {
  app.component(VathThreeRendererEvents.name, VathThreeRendererEvents)
}
export {
  VathThreeRendererEvents,
}
export default VathThreeRendererEvents
