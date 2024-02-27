import { __VathEntityLayer } from '@vuesri-three/components/entity-layer'
import type { WallLayer } from '@vuesri-three/components/wall-layer'
import { ThreeRenderer } from '@vuesri-three/shared'
import { ReturnVoid } from '@vunk/core'

export interface WallEntityProperties {
  layer: WallLayer
  graphic: __esri.Graphic
}

export interface WallLayerProperties extends __VathEntityLayer.EntityLayerProperties {
  texture?: THREE.Texture
  
  height?: number
}

export interface LoadEvent {
  layer: WallLayer
  renderer: ThreeRenderer
  view: __esri.SceneView
}


export type OnLoad = (e: LoadEvent) => ReturnVoid

export {}
