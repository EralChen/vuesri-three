
import { __VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import { ThreeRenderNode } from './core'


export interface ThreeRenderNodeProerties extends  __esri.RenderNodeProperties {
    axesHelper?: boolean
 }


export interface ThreeNodeContext extends __VathThreeRenderer.ThreeContext {
  renderNode: __esri.RenderNode
  /**
   * render node inputs
   */
  inputs?: __esri.ManagedFBO[]
}


export type ThreeNodeComponent = __VathThreeRenderer.ThreeComponent<ThreeNodeContext>



export interface LoadEvent {
  renderer: ThreeRenderNode
  view: __esri.SceneView

}

export {}
