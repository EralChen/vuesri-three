<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { Polygon, Graphic } from '@vuesri/core/arcgis'
import { VathWallLayer, __VathWallLayer } from '@vuesri-three/components/wall-layer'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'

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


</script>
<template>
  <VaSceneView
    :default-options="{
      center: [120, 30],
      zoom: 10,
    }"
  >
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VathThreeRenderer>
      <VathWallLayer
        :source="source"
        @load="layerLoad"
      >
      </VathWallLayer>
    </VathThreeRenderer>
  </VaSceneView>
</template>
