
import { ReturnVoid } from '@vunk/core'
import type { ThreeRenderer } from './ThreeRenderer'

export {
  ThreeRenderer,
}

export interface SetupEvent {
  context: __esri.RenderContext
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  view: __esri.SceneView
}

export interface ThreeLayer {
  setup (e: SetupEvent): void;
  render(context: __esri.RenderContext): void;
  dispose(context: __esri.RenderContext): void;
}


export interface LoadEvent {
  view: __esri.View
  renderer: ThreeRenderer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid

export {}
