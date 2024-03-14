<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import TestRenderNode from './render-node.vue'

</script>
<template>
  <VaSceneView>
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>
    <TestRenderNode></TestRenderNode>
  </VaSceneView>
</template>
