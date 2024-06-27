<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri-three/components/three-render-node'
import { VathArcLayer, __VathArcLayer } from '@vuesri-three/components/arc-layer'
import { Graphic, Polyline } from '@vuesri/core/arcgis'
import { Color } from 'three'
import { shallowRef } from 'vue'

const texture = shallowRef('') 
const layerIf = shallowRef(true)
const sourceDefault = shallowRef([
  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [115.80895340787583,30.92933111293343],
          [115.86231959908358,30.99068362090549],
        ],
      ],
      
    }),
    attributes: {
      name: '管线1',
      type: '管线',
      id: '1',
    },
  }),

  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [115.80895340787583,30.92933111293343],
          [120.86231959908358,30.99068362090549],
        ],
      ],
      
    }),
    attributes: {
      name: '管线1',
      type: '管线',
      id: '2',
    },
  }),

]) 
const source = shallowRef([
  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [115.80895340787583,30.92933111293343],
          [115.86231959908358,30.99068362090549],
        ],
      ],
      
    }),
    attributes: {
      name: '管线1',
      type: '管线',
      id: '1',
    },
  }),

  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [115.80895340787583,30.92933111293343],
          [120.86231959908358,30.99068362090549],
        ],
      ],
      
    }),
    attributes: {
      name: '管线1',
      type: '管线2',
      id: '2',
    },
  }),

]) 
const color = shallowRef(new Color(0xff0000))
const layerLoad: __VathArcLayer.OnLoad = async (e) => {
  await e.layer.when()
  e.view.goTo(e.layer.fullExtent, {
    animate: false,
  })
}

const changeColor = () => {
  color.value = new Color(0x00ff00)
}

const changeSource = () => {
  source.value = source.value.length ? [] : sourceDefault.value
}

const changeTexture = () => {
  texture.value = texture.value ? '' : import.meta.env.VITE_BASE_URL + '/ThreeRenderer/images/arc_layer_texture.png'
}


</script>
<template>
  <VaSceneView>
    <template #before>
      <p>
        <ElButton @click="changeColor">
          颜色
        </ElButton>
        <ElButton @click="changeSource">
          数据
        </ElButton>

        <ElButton @click="changeTexture">
          材质
        </ElButton>

        <ElButton @click="layerIf = !layerIf">
          if {{ layerIf }}
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
      <VathArcLayer
        v-if="layerIf"
        :texture-url="texture"
        :source="source"
        :radius="1500"
        :color="color"
        @load="layerLoad"
      ></VathArcLayer>
    </VathThreeRenderNode>
  </VaSceneView>
</template>
