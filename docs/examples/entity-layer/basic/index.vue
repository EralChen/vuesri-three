<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
// import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'
import TestLayer from './TestLayer.vue'
import Graphic from 'esri/Graphic'
import { Point } from 'esri/geometry'
import { ref, shallowRef } from 'vue'
const source = shallowRef([
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
] as __esri.Graphic[]) 
const visible = ref(true)

// setInterval(() => {
//   source.value = source.value.map((g) => {
//     const p = g.geometry as Point
//     p.x += 0.01
//     p.y += 0.01
//     return g
//   })
// }, 2000)



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

    <VathThreeRenderNode>
      <TestLayer
        :visible="visible"
        :source="source"
      ></TestLayer>
    </VathThreeRenderNode>
  </VaSceneView>
</template>
