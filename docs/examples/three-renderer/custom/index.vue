<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import CustomLayer from './custom-layer.vue'


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
      <CustomLayer></CustomLayer>
    </VathThreeRenderer>
  </VaSceneView>
</template>
