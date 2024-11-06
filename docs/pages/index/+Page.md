<script setup>
const BasicDemo = defineAsyncComponent(() => import('./basic-demo.vue'))
</script>


# 快速开始

本节将介绍如何在项目中使用 @vuesri/three .

## 安装

```shell
# pnpm or npm or yarn
$ pnpm install @arcgis/core @vunk/core @vuesri/core  @vuesri/three
```


[@vuersi/core](https://eralchen.github.io/vuesri/) 依赖了 [@arcgis/core](https://www.npmjs.com/package/@arcgis/core/v/4.28.10)

需要注意 `@arcgis/core` [ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) 集成相关事项


## 开始

```typescript
// main.ts
import '@arcgis/core/assets/esri/themes/light/main.css'
import '@vunk/core/index.css'
import '@vuesri/core/index.css'
import '@vuesri/three/index.css'
```

```vue
<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri/three/components/three-render-node'
import { VathWallLayer, __VathWallLayer } from '@vuesri/three/components/wall-layer'
import { shallowRef } from 'vue'
import { Graphic, Polygon } from '@vuesri/core/arcgis'

const source = shallowRef([
  new Graphic({
    geometry: new Polygon({
      rings: [
        [
          [120.06042151525118, 30.662125251189924, 20], // 坐标1
          [120.06062768282786, 30.661485074268175, 20], // 坐标2
          [120.06244594187316, 30.661832265145, 20], // 坐标3
          [120.06211341172, 30.662362273709977, 20], // 坐标4

        ],

      ],
    }),
  }),
])

const layerLoad:__VathWallLayer.OnLoad = async (e) => {
  const { view, layer } = e
  await view.when()
  await layer.when()

  view.goTo({
    target: layer.fullExtent.expand(3),
    tilt: 40,
  }, {
    animate: false,
  })
}
</script>
<template>
  <VaSceneView
    style="height: 50vh"
  >
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{ wkid: 102100 }"
    />

    <VathThreeRenderNode>
      <VathWallLayer
        :source="source"
        @load="layerLoad"
      >
      </VathWallLayer>
    </VathThreeRenderNode>
  </VaSceneView>
</template>

```

<ClientOnly>
  <BasicDemo></BasicDemo>
</ClientOnly>




## 更多

您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。
