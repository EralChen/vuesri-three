<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import { VathPipeLayer, __VathPipeLayer } from '@vuesri-three/components/pipe-layer'
import { Graphic, Polyline } from '@vuesri/core/arcgis'

const source: __esri.Graphic[] = [
  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [115.80895340787583,30.92933111293343],
          [115.81947621477968,30.936026430486265],
          [115.85073577332635,30.952730603143078],
          [115.86830705038578,30.964969701156637],
          [115.87796494895557,30.970050440481813],
          [115.88263291871093,30.97587476869184],
          [115.88153549018487,30.97619308639916],
          [115.88860467181571,30.985581605596618],
          [115.89039457558401,30.99614115304192],
          [115.89037581420371,30.99986573852132],
          [115.88982453627196,31.003621647335926],
          [115.88822886767906,30.999078415194415],
          [115.88681216877917,30.997464365151867],
          [115.88286139825868,30.99686255666582],
          [115.87841763117079,30.999826971071514],
          [115.86308179931808,30.99584156461405],
          [115.85510630972263,30.993171784031908],
          [115.86174910808289,30.993473404196706],
          [115.86231959908358,30.99068362090549],
        ].map(item => {
          item[2] = 200
          return item
        }),
      ],
      
    }),
  }),

]

const layerLoad: __VathPipeLayer.OnLoad = async (e) => {
  await e.layer.when()
  e.view.goTo(e.layer.fullExtent, {
    animate: false,
  })
}
const viewOptions: __esri.SceneViewProperties = {
  viewingMode: 'local',
}
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

    <VathThreeRenderer>
      <VathPipeLayer
        :source="source"
        @load="layerLoad"
      >
      </VathPipeLayer>
    </VathThreeRenderer>
  </VaSceneView>
</template>
