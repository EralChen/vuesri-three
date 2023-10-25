
import { ThreeRenderer } from '@vuesri-three/shared/core'
import { ReturnVoid } from '@vunk/core'



export interface SetupEvent {
  context: __esri.RenderContext
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  view: __esri.SceneView
}




export interface LoadEvent {
  view: __esri.View
  renderer: ThreeRenderer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid

export {}
