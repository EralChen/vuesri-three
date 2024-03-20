<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'
import { VathWallLayer, __VathWallLayer } from '@vuesri-three/components/wall-layer'
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
