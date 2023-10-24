<script lang="ts">
import { emits } from './ctx'
import { defineComponent, provide } from 'vue'
import { useSceneView } from '@vuesri/core/composables'
import { ThreeRenderer } from './ThreeRenderer'

export default defineComponent({
  name: 'VaThreeRenderer',
  // props,
  emits,
  setup (props, { emit }) {
    const view = useSceneView()
    
    const threeRenderer = new ThreeRenderer({
      view: view,
    })

    provide('vaThreeRenderer', threeRenderer)

    emit('load', {
      view,
      renderer: threeRenderer,
    })

    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
