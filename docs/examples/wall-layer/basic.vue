<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VaThreeRenderer } from '@vuesri-three/components/three-renderer'
import { VaWallLayer } from '@vuesri-three/components/wall-layer'
import { Polyline } from '@vuesri/core/arcgis'
const viewOptions:__esri.SceneViewProperties = {
  center: [120, 30],
  zoom: 10,
}
const geometry = new Polyline({
  paths: [
    [
      [121, 31],
      [120, 30],
    ],
   
    [
      [120, 30],
      [121.15803278368847, 30.84917751352612],
    ],
  ],
})
</script>
<template>
  <VaSceneView
    :default-options="viewOptions"
  >
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VaThreeRenderer :axes-helper="true">
      <VaWallLayer 
        :geometry="geometry"
        :height="1000"
        :alpha-map-url="'/ThreeRenderer/images/wall_layer_alpha_map.png'"
        :texture-url="'/ThreeRenderer/images/wall_layer_texture.png'"
      >
      </VaWallLayer>
    </VaThreeRenderer>
  </VaSceneView>
</template>