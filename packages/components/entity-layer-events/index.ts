import { App } from 'vue'
import VathEntityLayerEvents from './src/index.vue'
export * as __VathEntityLayerEvents from './src/types'
export * as _VathEntityLayerEventsCtx from './src/ctx'

VathEntityLayerEvents.install = (app: App): void => {
  app.component(VathEntityLayerEvents.name, VathEntityLayerEvents)
}
export {
  VathEntityLayerEvents,
}
export default VathEntityLayerEvents
