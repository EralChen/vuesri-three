<script lang="ts">
import { props as propsOpts, emits } from './ctx'
import { defineComponent, watch} from 'vue'
import { WaveLayer } from './core'
import { useThreeRenderer } from '@vuesri-three/composables'
import { _VathLayerUse } from '@vuesri-three/components/layer'

export default defineComponent({
  name: 'VathWaveLayer',
  props: propsOpts,
  emits,
  setup (props, { emit }) {
    const layer = new WaveLayer({ source: props.source })
    const renderer = useThreeRenderer()

    watch(() => props.source, () => {
      layer.source = props.source
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
