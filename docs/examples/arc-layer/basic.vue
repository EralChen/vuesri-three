<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import { VathArcLayer, __VathArcLayer } from '@vuesri-three/components/arc-layer'
import { Graphic, Polyline } from '@vuesri/core/arcgis'

const source: __esri.Graphic[] = [
  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [115.80895340787583,30.92933111293343],
          [115.86231959908358,30.99068362090549],
        ].map(item => {
          item[2] = 200
          return item
        }),
      ],
      
    }),
    attributes: {
      name: '管线1',
      type: '管线',
      id: '1',
    },
  }),

]

const layerLoad: __VathArcLayer.OnLoad = async (e) => {
  await e.layer.when()
  e.view.goTo(e.layer.fullExtent, {
    animate: false,
  })
}
</script>
<template>
  <VaSceneView>
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VathThreeRenderer>
      <VathArcLayer
        :source="source"
        @load="layerLoad"
      ></VathArcLayer>
    </VathThreeRenderer>
  </VaSceneView>
</template>
