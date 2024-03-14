import { App } from 'vue'
import VathThreeRenderNode from './src/index.vue'
export * as __VathThreeRenderNode from './src/types'

VathThreeRenderNode.install = (app: App): void => {
  app.component(VathThreeRenderNode.name, VathThreeRenderNode)
}
export {
  VathThreeRenderNode,
}
export default VathThreeRenderNode
