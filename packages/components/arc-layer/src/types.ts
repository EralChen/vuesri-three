
import { ThreeRenderer } from '@vuesri-three/shared'
import type { ArcLayer } from './core'
import { ReturnVoid } from '@vunk/core'

export interface LoadEvent {
  renderer: ThreeRenderer
  view: __esri.SceneView
  layer: ArcLayer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid



export interface ArcEntityProperties {
  layer: ArcLayer,
  graphic: __esri.Graphic
}



export {}
