<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watch } from 'vue'
import { PipeLayer } from './core'
import { _VathLayerUse } from '@vuesri-three/components/layer'
import { useThreeRenderer } from '@vuesri-three/composables'
import { VathEntityLayerEvents, _VathEntityLayerEventsCtx } from '@vuesri-three/components/entity-layer-events'
export default defineComponent({
  name: 'VathPipeLayer',
  components: {
    VathEntityLayerEvents,
  },
  props,
  emits,
  setup (props, { emit }) {
    const renderer = useThreeRenderer()
    const eventsEmits = _VathEntityLayerEventsCtx.createOnEmits(emit)

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
    provide('vathEntityLayer', layer)

    return {
      eventsEmits,
    }
  },
})
</script>
<template>
  <VathEntityLayerEvents
    v-on="eventsEmits"
  ></VathEntityLayerEvents>
  <slot></slot>
</template>
