import { App } from 'vue'
import VaThreeRendererEvents from './src/index.vue'
export * as __VaThreeRendererEvents from './src/types'

VaThreeRendererEvents.install = (app: App): void => {
  app.component(VaThreeRendererEvents.name, VaThreeRendererEvents)
}
export {
  VaThreeRendererEvents,
}
export default VaThreeRendererEvents
