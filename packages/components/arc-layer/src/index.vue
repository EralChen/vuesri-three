<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watch, watchEffect } from 'vue'
import { ArcLayer } from '@vuesri-three/components/arc-layer'
import { _VathLayerUse } from '@vuesri-three/components/layer'
import { useThreeRenderer } from '@vuesri-three/composables'
import { VathEntityLayerEvents, _VathEntityLayerEventsCtx } from '@vuesri-three/components/entity-layer-events'
import { RepeatWrapping, TextureLoader } from 'three'

export default defineComponent({
  name: 'VathArcLayer',
  components: {
    VathEntityLayerEvents,
  },
  props,
  emits,
  setup (props, { emit }) {
    const renderer = useThreeRenderer()
    const eventsEmits = _VathEntityLayerEventsCtx.createOnEmits(emit)

    const layer = new ArcLayer({
      source: props.source,
    })
    watch(() => props.source, (source) => {
      layer.source = source
      layer.refresh()
    })

    watchEffect(() => {
      layer.radius = props.radius
    })

    watchEffect(() => {
      layer.color = props.color
    })

    watchEffect(() => {
      if (props.textureUrl) {
 
        layer.texture = (function () {
          const texture = new TextureLoader().load(props.textureUrl)
          texture.wrapS = RepeatWrapping
          texture.wrapT = RepeatWrapping
          texture.repeat.set(1, 1)
          return texture 
        })()
      } else {
        layer.texture = null
      }
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
