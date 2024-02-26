<script lang="ts">
import { emits, props } from './ctx'
import { defineComponent, provide } from 'vue'
import { useSceneView } from '@vuesri/core/composables'
import { VathThreeRendererEvents } from '@vuesri-three/components/three-renderer-events'
import mitt from 'mitt'
import { sMitter } from '@vuesri/core/shared'
import { ThreeRenderer } from './core'
export default defineComponent({
  name: 'VathThreeRenderer',
  components: {
    VathThreeRendererEvents,
  },
  props,
  emits,
  setup (props, { emit }) {
    const view = useSceneView()
    
    const threeRenderer = new ThreeRenderer({
      view: view,
      axesHelper: props.axesHelper,
    })
    threeRenderer[sMitter] = mitt() // 为 renderer 安装一个事件总线
    
    globalThis.__VA_THREE_RENDERER__ = threeRenderer
    
    

    provide('vathThreeRenderer', threeRenderer)

    emit('load', {
      view,
      renderer: threeRenderer,
    })

    return {}
  },
})
</script>
<template>
  <VathThreeRendererEvents />
  <slot></slot>
</template>
