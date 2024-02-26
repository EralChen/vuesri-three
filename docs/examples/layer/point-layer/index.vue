<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import TestPointLayer from './TestPointLayer.vue'
import Graphic from 'esri/Graphic'
import { Point } from 'esri/geometry'
import { ref } from 'vue'
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
const visible = ref(true)

</script>
<template>
  <VaSceneView
    :default-options="{
      center: [120, 30],
      zoom: 10,
    }"
  >
    <template #before>
      <p>
        <ElButton @click="visible = !visible">
          current visible is {{ visible }}
        </ElButton>
      </p>
    </template>
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VathThreeRenderer>
      <TestPointLayer
        :visible="visible"
        :source="source"
      ></TestPointLayer>
    </VathThreeRenderer>
  </VaSceneView>
</template>
