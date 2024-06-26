<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap, VaViewUi } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'
import { VathGeoRegionLayer, __VathGeoRegionLayer } from '@vuesri-three/components/geo-region-layer'
import { FileLoader } from 'three'
import { onMounted, ref } from 'vue'
import { FarstConfig } from '@farst-three/core'
import GUI from 'lil-gui'
import { GeoRegionLayer } from '@vuesri-three/components/geo-region-layer/src/core'

FarstConfig.ASSETSPATH = '/ssr/'
const loader = new FileLoader()
const geojsonData = ref()
loader.load('/ssr/geojson-plane/nbs.json', (data) => {
  geojsonData.value = JSON.parse(data as string)
})
const viewOptions: __esri.SceneViewProperties = {
  center: [121.62, 29.87],
  zoom: 8,
  viewingMode: 'local',
  spatialReference: {
    wkid: 102100,
  },
}
let layer: GeoRegionLayer
function layerLoad (e: __VathGeoRegionLayer.LoadEvent) {
  layer = e.layer
}
const boxRef = ref<InstanceType<typeof VaViewUi> | null>(null)
onMounted(() => {
  const gui = new GUI({ container: boxRef.value!.$el })
  layer.when().then(() => {    
    gui.add(layer.geojsonPlane, 'visible') 
  })
})
</script>
<template>
  <VaSceneView :default-options="viewOptions">
    <VaViewUi
      ref="boxRef"
      :position="'top-right'"
    ></VaViewUi>
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VathThreeRenderNode>
      <VathGeoRegionLayer
        :source="geojsonData"
        :z="2000"
        :offset-z="100"
        @load="layerLoad"
      ></VathGeoRegionLayer>
    </VathThreeRenderNode>
  </VaSceneView>
</template>
