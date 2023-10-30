<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VaThreeRenderer } from '@vuesri-three/components/three-renderer'
import { VaWallLayer } from '@vuesri-three/components/wall-layer'
import { Polyline, Polygon, Extent } from '@vuesri/core/arcgis'
const viewOptions:__esri.SceneViewProperties = {
  center: [104.06179498614645, 30.659871702738265],
  zoom: 18,
}
// const geometry = new Polyline({
//   paths: [
//     [
//       [104.06191956585747, 30.660483165583024], // 坐标1
//       [104.0646914649979, 30.65909115535485], // 坐标2
//     ],
   

//   ],
// })
// const geometry = new Extent({
//   xmin: 104.06191956585747,
//   ymin: 30.660483165583024,
//   xmax: 104.0646914649979,
//   ymax: 30.65909115535485,
//   spatialReference: {
//     wkid: 4326,
//   },
// })

const geometry = new Polygon({
  rings: [
    [
      [104.06191956585747, 30.660483165583024], // 坐标1
      [104.06191956585747, 30.65909115535485], // 坐标2
      [104.0646914649979, 30.65909115535485], // 坐标3
      [104.0646914649979, 30.660483165583024], // 坐标4
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
        :height="50"
        :alpha-texture-url="'/ThreeRenderer/images/wall_layer_alpha_map.png'"
        :texture-url="'/ThreeRenderer/images/wall_layer_texture.png'"
      >
      </VaWallLayer>
    </VaThreeRenderer>
  </VaSceneView>
</template>