<script lang="ts">
import { emits, props } from './ctx'
import { defineComponent, provide } from 'vue'
import { useSceneView } from '@vuesri/core/composables'
import { ThreeRenderer } from '@vuesri-three/shared/core'


export default defineComponent({
  name: 'VaThreeRenderer',
  props,
  emits,
  setup (props, { emit }) {
    const view = useSceneView()
    
    const threeRenderer = new ThreeRenderer({
      view: view,
      axesHelper: props.axesHelper,
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
