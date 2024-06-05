--- 
title: ThreeRenderer
lang: zh-CN
---

# ThreeRenderer

通过 [externalRenderers](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-3d-externalRenderers.html)， 在 `SceneView` 中集成 `THREE.WebGLRenderer`


## Basic

实现了 `ThreeComponent` 并被添加到 `layers` 中的实例将被渲染到 `SceneView` 中

:::details ThreeComponent
```ts
export interface ThreeComponent {
  /**
   * three renderer 初始化时，调用 setup 方法
   */
  setup (e: ThreeContext): void;

  /**
   * three renderer 每次渲染时，调用 render 方法
   */
  render(e: ThreeContext): void;

  /**
   * three renderer 销毁时，调用 dispose 方法
   */
  dispose(e: ThreeContext): void;
}
```
:::

:::demo 
three-renderer/basic/index
>>>subs
[three-renderer/basic/TestPoint]
>>>
:::
