<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'

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
    </VathThreeRenderer>
  </VaSceneView>
</template>
