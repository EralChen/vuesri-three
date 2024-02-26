<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, watch } from 'vue'
import { PipeLayer } from './core'
import { _VathLayerUse } from '@vuesri-three/components/layer'
import { useThreeRenderer } from '@vuesri-three/composables'

export default defineComponent({
  name: 'VathPipeLayer',
  props,
  emits,
  setup (props, { emit }) {
    const renderer = useThreeRenderer()
    const layer = new PipeLayer({
      source: props.source,
    })
    watch(() => props.source, (source) => {
      layer.source = source
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
