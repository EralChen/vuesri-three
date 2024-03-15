
import { ThreeRenderer } from '@vuesri-three/shared'
import { ReturnVoid } from '@vunk/core'
import { Scene, WebGLRenderer } from 'three'

export interface ThreeComponent {
  /**
   * three renderer 初始化时，调用 setup 方法
   * 遍历执行所有 layers 的 setup 方法
   */
  setup (e: ThreeContext): void;

  /**
   * three renderer 每次渲染时，调用 render 方法
   * 遍历执行所有 layers 的 render 方法
   */
  render(e: ThreeContext): void;

  /**
   * three renderer 销毁时，调用 dispose 方法
   * 遍历执行所有 layers 的 dispose 方法
   */
  dispose(e: ThreeContext): void;
}

export interface ThreeContext {
  context: __esri.RenderContext
  renderer: WebGLRenderer
  scene: Scene
  view: __esri.SceneView
}


export interface LoadEvent {
  view: __esri.View
  renderer: ThreeRenderer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid

export {}
