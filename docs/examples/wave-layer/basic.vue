<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap, VaViewUi } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'
import { VathWaveLayer, __VathWaveLayer } from '@vuesri-three/components/wave-layer'
import { onMounted, ref } from 'vue'
import { Graphic, Point } from '@vuesri/core/arcgis'
import GUI from 'lil-gui'
import { WaveLayer } from '@vuesri-three/components/wave-layer/src/core'
import { FtDiffusionWaveMesh } from '@farst-three/core'
import { BackSide, DoubleSide, FrontSide } from 'three'

const viewOptions: __esri.SceneViewProperties = {
  center: [120.81657563861, 30],
  zoom: 18,
  // viewingMode: 'local',
  spatialReference: {
    wkid: 102100,
  },
}


const source: __esri.Graphic[] = [
  new Graphic({
    geometry: new Point({
      longitude: 120.80657463861,
      latitude: 30,
      z: 50,
    }),
    attributes: {},
  }),
  new Graphic({
    geometry: new Point({
      longitude: 120.82657463861,
      latitude: 30,
      z: 50,
    }),
    attributes: {},
  }),
  new Graphic({
    geometry: new Point({
      longitude: 120.81657563861,
      latitude: 30,
      z: 10,
    }),
    attributes: {
      radius: 100,
      segments: 64,
      waveColor: '#331282',
      waveDamping: 0.3,
      waveLaps: 2.0,
      waveOpacity: 1,
      waveThreshold: 0.5,
      waveIntensity: 20.0,
      bgOpacity: 0,
      bgColor: '#000000',
    },
  }),
]

let layer: WaveLayer
function layerLoad (e: __VathWaveLayer.LoadEvent) {
  layer = e.layer
}
const boxRef = ref<InstanceType<typeof VaViewUi> | null>(null)
onMounted(() => {  
  const gui = new GUI({ container: boxRef.value!.$el })
  layer.when().then(() => {
    const obj = layer.group.children[2] as FtDiffusionWaveMesh
    const material = obj.material
    gui.add(material, 'visible').name('是否可见 visible')
    gui.add(material, 'waveOpacity', 0, 1).name('透明度 waveOpacity')
    gui.addColor(material, 'waveColor').name('颜色 waveColor')
    gui.add(material, 'waveDamping', 0, 1).name('速度 waveDamping')
    gui.add(material, 'waveLaps', 0, 3, 1).name('圈数 waveLaps')
    gui.addColor(material, 'bgColor').name('背景色 bgColor')
    gui.add(material, 'bgOpacity', 0, 1, 0.1).name('背景透明度 bgOpacity')
    gui.add(material, 'waveIntensity', 0, 20, 0.1).name('光圈宽度 waveIntensity')
    gui
      .add(material, 'waveThreshold', 0, 3, 0.01)
      .name('背景与光圈的色差 waveThreshold')
    gui
      .add(material, 'side', { DoubleSide, FrontSide, BackSide })
      .name('渲染面 side')
    gui
      .add({scale: 1}, 'scale', 1, 100, 1.0).onChange((v: number) => {
        obj.scale.set(v, v, v)
      })
      .name('缩放 scale')
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
      <VathWaveLayer
        :source="source"
        @load="layerLoad"
      ></VathWaveLayer>
    </VathThreeRenderNode>
  </VaSceneView>
</template>
