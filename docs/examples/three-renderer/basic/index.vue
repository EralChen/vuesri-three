<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import TestPoint from './TestPoint.vue'
import { Point } from 'esri/geometry'

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

    <VathThreeRenderer>
      <TestPoint
        :point="point"
      ></TestPoint>
    </VathThreeRenderer>
  </VaSceneView>
</template>
