
import { ThreeRenderer } from '@vuesri-three/shared'
import { WaveLayer } from './core'
import { __VathEntityLayer } from '@vuesri-three/components/entity-layer'

export interface LoadEvent {
  renderer: ThreeRenderer
  view: __esri.SceneView
  layer: any
}

export interface WaveEntityProperties {
  graphic: __esri.Graphic
  layer: WaveLayer
}

export interface WaveLayerProperties extends __VathEntityLayer.EntityLayerProperties {}



export {}
