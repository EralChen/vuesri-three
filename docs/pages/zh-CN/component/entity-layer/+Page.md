# EntityLayer

[ThreeLayer](../layer/+Page.md#threelayer) - EntityLayer

## EntityLayer Overview

[ThreeLayer](../layer/+Page.md#threelayer) 通常使用客户端的矢量地理信息数据 (点、线、面) 渲染 `Object3D` 

约定 `source` 字段，用于指定数据源， [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 为数据源的基本单元

则有 `Graphic` 与 `Object3D` 的映射关系, 像这样的描述 `Graphic` 与 `Object3D` 的对象， 我们称之为 `Entity`

```ts
export interface Entity extends ThreeComponent {
  /**
   * 所属图层
   */
  layer: EntityLayer
  
  /**
   * 数据源基本单元
   */
  graphic: __esri.Graphic

  /**
   * 由单个 graphic 创建的 THREE.Group
   */
  group: THREE.Group
}
```


## EntityLayer Property Overview
| Name | Type | Visibility | Description |
| --- | --- | --- | --- |
| [ThreeLayer Properties](../layer/+Page.md#threelayer-property-overview) | - | - | - |
| source | __esri.Graphic[] | - | 数据源 |
| [group](https://threejs.org/docs/?q=group#api/en/objects/Group) | THREE.Group | - | 由 `source` 生成 | 


## EntityLayer Method Overview
| Name | Type | Visibility | Description |
| --- | --- | --- | --- |
| [ThreeLayer Methods](../layer/+Page.md#threelayer-method-overview) | - | - | - |

## Basic

:::demo 
entity-layer/basic
:::

## EntityLayer 其他
