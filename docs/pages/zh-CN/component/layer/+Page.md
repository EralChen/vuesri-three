# Layer

关于图层的介绍

## ThreeLayer

约定所有添加到 `threeRenderer.layers` 中的图层都是 `ThreeLayer` 的实例

就像 [__esri.Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#properties-summary) 一样，用作所有图层的基类

### ThreeLayer Property Overview
| Name | Type | Visibility | Description |
| --- | --- | --- | --- |
| title | String | - | 图层标题 |
| fullExtent | [Extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html) | - | 图层的完整范围 |
| visible | Boolean | - | 图层是否可见 |


### ThreeLayer Method Overview
| Name | Type | Visibility | Description |
| --- | --- | --- | --- |
| [ThreeComponent](../three-renderer/+Page.md#basic) | - | - | - |
| when |() => Promise | - | 图层加载完成后执行的回调函数 |
| getContext | () => ThreeContext | - | 获取 setup 上下文 |
| getRenderTransform | () => [RenderTransform](../transform/+Page.md) | - | 获取RenderTransform 实例 |
| refresh | () => void | - | `dispose` 后，重新 `setup`   |
| ready | () => void | protected | 在图层加载完成后需要手动调用, 使 `when`返回的 `Promise` Fulfilled  |



:::demo 
layer/point-layer/index
>>>subs
[layer/point-layer/TestPointLayer]
>>>
:::



<!-- :::demo
layer/accessor/index
::: -->
