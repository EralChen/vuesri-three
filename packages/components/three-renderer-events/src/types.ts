import { ThreeRenderer } from '@vuesri-three/shared/core'
import { __VaView } from '@vuesri/core/components/view'
import { Emitter } from 'mitt'
import type { Intersection, Object3D, Object3DEventMap, Raycaster } from 'three'

export type EventName = 'click' | 'pointer-move'

export type Feature = Intersection<Object3D<Object3DEventMap>>

export interface ClickEvent extends __VaView.ClickEvent {
  view: __esri.SceneView
  raycaster: Raycaster
  features: Feature[]
  feature: Feature | undefined
  threeRenderer: ThreeRenderer
}


export interface PointerMoveEvent extends __VaView.PointerMoveEvent {
  view: __esri.SceneView
  raycaster: Raycaster
  features: Feature[]
  feature: Feature | undefined
  threeRenderer: ThreeRenderer
}




export type MitterEvents = {
  click: ClickEvent;
  'pointer-move': PointerMoveEvent;
};

export type Mitter = Emitter<MitterEvents>
