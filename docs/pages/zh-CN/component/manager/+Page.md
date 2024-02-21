
# Manager


## MaterialManager

`MaterialManager` 为了 `material` 便于复用，提供了 `materialMap` 对象进行存储。

```ts
class TestLayer extends MaterialManager(Layer) implements ThreeLayer {
  constructor (properties: TestPointLayerProperties = {}) {
    super()
    properties.material && (this.material = properties.material)
  }
}
```

## TextureManager

`TextureManager` 为了 `texture` 便于复用，提供了 `textureMap` 对象进行存储。

```ts
class TestLayer extends TextureManager(Layer) implements ThreeLayer {
  constructor (properties: TestPointLayerProperties = {}) {
    super()
    properties.texture && (this.texture = properties.texture)
  }
}
```

