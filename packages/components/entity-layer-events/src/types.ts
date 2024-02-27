
import { __VathThreeRendererEvents } from '@vuesri-three/components/three-renderer-events'


export interface ClickEvent extends __VathThreeRendererEvents.ClickEvent {
  layer: any
  result: {
    graphic?: __esri.Graphic
  }
}


export interface PointerMoveEvent extends __VathThreeRendererEvents.PointerMoveEvent {
  layer: any
  result: {
    graphic?: __esri.Graphic
  }
}


export {}

