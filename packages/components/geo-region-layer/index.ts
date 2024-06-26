import { App } from 'vue'
import VathGeoRegionLayer from './src/index.vue'
export * as __VathGeoRegionLayer from './src/types'

VathGeoRegionLayer.install = (app: App): void => {
  app.component(
    VathGeoRegionLayer.name || 'VathGeoRegionLayer', 
    VathGeoRegionLayer
  )
}
export {
  VathGeoRegionLayer,
}
export default VathGeoRegionLayer
