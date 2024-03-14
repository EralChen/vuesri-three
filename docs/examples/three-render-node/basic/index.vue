<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'
import { Point } from '@vuesri/core/arcgis'
import TestPoint from './TestPoint.vue'
const point = new Point({
  latitude: 30,
  longitude: 120,
  z: 1000,
})

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
    <VathThreeRenderNode>
      <TestPoint
        :point="point"
      ></TestPoint>
    </VathThreeRenderNode>
  </VaSceneView>
</template>
