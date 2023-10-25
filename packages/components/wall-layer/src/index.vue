<script lang="ts">
import { WallLayer } from '@vuesri-three/shared/core/layers'
import { props, emits } from './ctx'
import { defineComponent, onUnmounted, watchEffect } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'

export default defineComponent({
  name: 'VaWallLayer',
  props,
  emits,
  setup (props, { emit }) {
    const layer = new WallLayer()
    const renderer = useThreeRenderer()

    watchEffect(() => {
      if (!props.geometry) return
      layer.setGeometry(props.geometry)
    })

    watchEffect(() => {
      if (typeof props.height !== 'number') return
      layer.setHeight(props.height)
    })
    watchEffect(() => {
      layer.setAlphaMapUrl(props.alphaMapUrl)
    })

    watchEffect(() => {
      layer.setTextureUrl(props.textureUrl)
    })



    renderer.layers.add(layer)
    
    onUnmounted(() => {
      renderer.layers.remove(layer)
    })


    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
