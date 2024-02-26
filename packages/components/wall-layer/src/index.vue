<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, watch, watchEffect } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'
import { WallLayer } from './core'
import { _VathLayerUse } from '@vuesri-three/components/layer'

export default defineComponent({
  name: 'VathWallLayer',
  props,
  emits,
  setup (props, { emit }) {
    const layer = new WallLayer({
      source: props.source,
    })
    const renderer = useThreeRenderer()

    watchEffect(() => {
      layer.texture = props.texture
    })

 
    watch(() => props.source, () => {
      layer.source = props.source
      layer.refresh()
    })

    _VathLayerUse.useAddLayer(renderer, layer)

    emit('load', {
      layer,
      renderer,
      view: renderer.view,
    })

    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
