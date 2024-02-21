# Layer

在 `@vuesri/three` 中，矢量数据通过转化到 `WebGL` 中渲染。

自定义的 Layer 就像 [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) 一样，接受 [source](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#source) 属性，用于渲染地理信息数据。



每个 Layer 都要实现 `ThreeLayer` 接口， 才能被 `ThreeRenderer` 渲染

:::details ThreeLayer
```ts
export interface ThreeLayer extends ThreeComponent {
  /**
   * layer 名称
   */
  title?: string;
  /**
   * 数据源
   */
  source?: __esri.Graphic[]
}

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

```
:::



## PointLayer

实现一个简易的 `PointLayer`, 在 `source` 提供的点位上，渲染出旋转的立方体。

在 `three` 中 [Mesh](https://threejs.org/docs/#api/zh/objects/Mesh) 可以构建一个简易的立方体。代码示例：

```ts 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

构建一个立方体需要 `geometry` 和 `material` 两个参数，可以在 `PointLayer` 构造函数中，将 `material` 预设

```ts

class TestPointLayer extends MaterialManager(
  Layer
) implements ThreeLayer {
  source: __esri.Graphic[];
  constructor (properties: TestPointLayerProperties = {}) {
    super()
    this.source = properties.source || []
    properties.material && (this.material = properties.material)
  }
  setup (e: ThreeContext): void {
    
  }
  render (e: ThreeContext): void {
      
  }
  dispose (e: ThreeContext): void {
      
  }
}

```

`MaterialManager` 为了 `material` 便于复用，提供了 `materialMap` 进行存储。

:::details MaterialManager
```ts
export function MaterialManager<
  TBase extends GConstructor 
> (Base: TBase) {
  
  /**
   * @classdesc MaterialManagerMixing
   * @property {Map<string, Material | Material[]>} materialMap - 提供材质存储
   * @property {} material - 默认材质
   * @property {string} default - 默认键名
   */
  return class MaterialManagerMixing extends Base {
    materialMap: Map<string, Material | Material[]> = new Map([
      ['default', new MeshBasicMaterial({ color: 0xff0000 })],
    ])
    readonly defaultKey = 'default' as const
    get material (): Material | Material[] {
      return this
        .materialMap
        .get(this.defaultKey) as Material | Material[]
    }
    set material (v: Material | Material[]) {
      this.materialMap.set(this.defaultKey, v)
    }
  }
}
```
:::


为了精细化控制每个点位的 `Object3D`, 构建一个 `Entity` 类, 它与 `source` 中的 `graphic` 一一对应。
:::details TestPointEntity 
```ts

class TestPointEntity implements ThreeComponent {
  layer: Layer
  graphic: __esri.Graphic
  constructor (properties: TestPointEntityProperties) {
    this.layer = properties.layer
    this.graphic = properties.graphic
  }
  setup (e: ThreeContext): void {
    
  }
  render (e: ThreeContext): void {
    
  }
  dispose (e: ThreeContext): void {
    
  }
}

class TestPointLayer extends MaterialManager(
  Layer
) implements ThreeLayer {
  source: __esri.Graphic[];
  entities: TestPointEntity[] = []
  constructor (properties: TestPointLayerProperties = {}) {
    super()
    this.source = properties.source || []
    properties.material && (this.material = properties.material)
  }
  setup (e: ThreeContext): void {
    super.setup(e)
    this.entities = this.source.map((graphic) => {
      return new TestPointEntity({
        layer: this,
        graphic,
      })
    })
    this.entities.forEach((entity) => {
      entity.setup(e)
    })
    this.whenDef.resolve()
  }
  render (e: ThreeContext): void {
    this.entities.forEach((entity) => {
      entity.render(e)
    })
  }
  dispose (e: ThreeContext): void {
    this.entities.forEach((entity) => {
      entity.dispose(e)
    })
  }

  refresh () {
   return this.contextDef.promise.then((e) => {
      this.dispose(e)
      this.setup(e)
    })
  }
  
}
```

:::

:::demo 
layer/point-layer/index
>>>tabs
[layer/point-layer/TestPointLayer]
>>>
:::

## Layer 其他
