<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VaThreeRenderer } from '@vuesri-three/components/three-renderer'
import TestPointLayer from './TestPointLayer.vue'
import Graphic from 'esri/Graphic'
import { Point } from 'esri/geometry'
const source: __esri.Graphic[] = [
  new Graphic({
    geometry: new Point({
      x: 120.1,
      y: 30.1,
      z: 1000,
    }),
    attributes: {
      name: 'cx',
      value: 100,
    },
  }),
  new Graphic({
    geometry: new Point({
      x: 120,
      y: 30,
      z: 1000,
    }),
    attributes: {
      name: 'sl',
      value: 200,
    },
  }),
]

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

    <VaThreeRenderer>
      <TestPointLayer
        :source="source"
      ></TestPointLayer>
    </VaThreeRenderer>
  </VaSceneView>
</template>
