
import { ThreeRenderer } from '@vuesri-three/shared'

export interface LoadEvent {
  renderer: ThreeRenderer
  view: __esri.SceneView
  layer: any
}

export interface GeoRegionLayerOptions {
  z?: number
  offsetZ?: number
}
