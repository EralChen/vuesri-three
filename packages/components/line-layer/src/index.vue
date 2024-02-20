<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onUnmounted } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'
import { LineLayer } from '@vuesri-three/shared/core'

export default defineComponent({
  name: 'VaLineLayer',
  props,
  emits,
  setup (props, { emit }) {

    const layer = new LineLayer()
    const renderer = useThreeRenderer()

    
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
