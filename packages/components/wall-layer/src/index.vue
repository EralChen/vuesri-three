<script lang="ts">
import { WallLayer } from '@vuesri-three/shared/core'
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

      layer.updateEntities({
        geometry: props.geometry,
        height: props.height,
      })

    })

    watchEffect(() => {
      if (!props.alphaTextureUrl) return

      layer.alphaTextureUrl = props.alphaTextureUrl
    })

    watchEffect(() => {
      if (!props.textureUrl) return

      layer.textureUrl = props.textureUrl
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
