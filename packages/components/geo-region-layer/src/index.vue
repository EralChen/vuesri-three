<script lang="ts">
import { useThreeRenderer } from '@vuesri-three/composables'
import { GeoRegionLayer } from './core'
import { props, emits } from './ctx'
import { defineComponent, watch } from 'vue'
import { _VathLayerUse } from '@vuesri-three/components/layer'

export default defineComponent({
  name: 'VathGeoRegionLayer',
  props,
  emits,
  setup (props, { emit }) {
    const layer = new GeoRegionLayer({
      z: props.z,
      offsetZ: props.offsetZ,
    })
    const renderer = useThreeRenderer()

    watch([
      () => props.z,
      () => props.offsetZ,
      () => props.source,
    ], ([z, offsetZ, source]) => {
      layer.z = z
      layer.offsetZ = offsetZ
      layer.geojsonPlane.geojson = source
      layer.refresh()
    })


    emit('load', { 
      layer,
      renderer,
      view: renderer.view,
    })

    _VathLayerUse.useAddLayer(renderer, layer)
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
