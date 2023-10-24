<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VaThreeRenderer } from '@vuesri-three/components/three-renderer'
import CustomLayer from './custom-layer.vue'

console.log(VaThreeRenderer, VaSceneView)

</script>
<template>
  <VaSceneView>
    <VaTdtBasemap
      :type="'img_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VaThreeRenderer>
      <CustomLayer></CustomLayer>
    </VaThreeRenderer>
  </VaSceneView>
</template>
