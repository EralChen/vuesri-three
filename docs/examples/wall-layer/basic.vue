<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { Polygon, Graphic } from '@vuesri/core/arcgis'
import { VathWallLayer, __VathWallLayer } from '@vuesri-three/components/wall-layer'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'

const source: __esri.Graphic[] = [
  new Graphic({
    geometry: new Polygon({
      rings: [
        [
          [104.06191956585747, 30.660483165583024], // 坐标1
          [104.06191956585747, 30.65909115535485], // 坐标2
          [104.0646914649979, 30.65909115535485], // 坐标3
          [104.0646914649979, 30.660483165583024], // 坐标4
        ],

      ],
    }),
    attributes: {
      name: 'cx',
      value: 100,
    },
  }),
]
const layerLoad: __VathWallLayer.OnLoad = async (e) => {
  const layer = e.layer
  await layer.when()
  e.view.goTo(layer.fullExtent, {
    animate: false,
  })
}

const defaultOptions: __esri.SceneViewProperties = {
  center: [120, 30],
  zoom: 10,
}
</script>
<template>
  <VaSceneView
    :default-options="defaultOptions"
  >
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VathThreeRenderNode>
      <VathWallLayer
        :source="source"
        @load="layerLoad"
      >
      </VathWallLayer>
    </VathThreeRenderNode>
  </VaSceneView>
</template>
