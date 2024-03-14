
import { ThreeRenderer } from '@vuesri-three/shared'
import { ReturnVoid } from '@vunk/core'
import { Scene, WebGLRenderer } from 'three'

export interface ThreeComponent<
  CTX extends ThreeContext = ThreeContext
> {
  /**
   * three renderer 初始化时，调用 setup 方法
   * 遍历执行所有 layers 的 setup 方法
   */
  setup (e: CTX): void;

  /**
   * three renderer 每次渲染时，调用 render 方法
   * 遍历执行所有 layers 的 render 方法
   */
  render?(e: CTX): void;


  animate?(e: CTX): void;

  /**
   * three renderer 销毁时，调用 dispose 方法
   * 遍历执行所有 layers 的 dispose 方法
   */
  dispose(e: CTX): void;
}

export interface ThreeContext {
  /**
   * @deprecated 
   * since 4.29. Use new :esri/views/3d/webgl/RenderNode RenderNode instead.
   */
  context: __esri.RenderContext
  renderer: WebGLRenderer
  scene: Scene
  view: __esri.SceneView
  
  renderNode?: __esri.RenderNode
}


export interface LoadEvent {
  view: __esri.View
  renderer: ThreeRenderer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid

export {}
