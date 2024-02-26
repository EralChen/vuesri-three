import { ThreeRenderer } from '@vuesri/three'
import type { PipeLayer } from './core'
import { ReturnVoid } from '@vunk/core'


export interface PipeEntityProperties {
  layer: PipeLayer
  graphic: __esri.Graphic
}

export interface LoadEvent {
  renderer: ThreeRenderer
  view: __esri.SceneView
  layer: PipeLayer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid

export {}
