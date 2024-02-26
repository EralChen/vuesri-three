<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onBeforeUnmount, watch } from 'vue'
import { PipeLayer } from './core'
import { _VathLayerUse, _VathLayerUtils } from '@vuesri-three/components/layer'
import { useThreeRenderer } from '@vuesri-three/composables'
import { createMitterToggleHandler } from '@vuesri/core/shared/mitter'
import { sMitter } from '@vuesri/core'


export default defineComponent({
  name: 'VathPipeLayer',
  props,
  emits,
  setup (props, { emit }) {
    const renderer = useThreeRenderer()
    const mitter = renderer[sMitter]
    const MitterToggleHandler = createMitterToggleHandler(mitter)


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

    const clickMitterToggleHandler = new MitterToggleHandler('click', (e) => {

      

      if (
        e.feature 
        && _VathLayerUtils.isDescendantOfGroup(e.feature.object, layer.group)
      ) {
        console.log('click', e.feature.object)

      }
    })
    clickMitterToggleHandler.add()
    onBeforeUnmount(() => {
      clickMitterToggleHandler.remove()
    })

    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
