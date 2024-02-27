import { ThreeRenderer } from '@vuesri/three'
import type { PipeLayer } from '@vuesri-three/components/pipe-layer'
import { ReturnVoid } from '@vunk/core'
import { __VathEntityLayerEvents } from '@vuesri-three/components/entity-layer-events'


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


export interface ClikEvent extends __VathEntityLayerEvents.ClickEvent {
  layer: PipeLayer
}

export type OnClick = (e: ClikEvent) => ReturnVoid

export interface PointerMoveEvent extends __VathEntityLayerEvents.PointerMoveEvent {
  layer: PipeLayer
}

export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid


export {}
