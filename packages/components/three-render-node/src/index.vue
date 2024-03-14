<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide } from 'vue'
import { useSceneView } from '@vuesri/core/composables'
import { VathThreeRendererEvents } from '@vuesri-three/components/three-renderer-events'
import mitt from 'mitt'
import { sMitter } from '@vuesri/core/shared'
import { ThreeRenderNode } from '@vuesri-three/components/three-render-node'

export default defineComponent({
  name: 'VathThreeRenderNode',
  components: {
    VathThreeRendererEvents,
  },
  props,
  emits,
  setup (props, { emit }) {
    const view = useSceneView()
        
    const threeRenderer = new ThreeRenderNode({
      view: view,
      axesHelper: props.axesHelper,
    })
    
    threeRenderer[sMitter] = mitt() // 为 renderer 安装一个事件总线
    globalThis.__VA_THREE_RENDERER__ = threeRenderer
    
    // for legacy support
    provide('vathThreeRenderer', threeRenderer)


    provide('vathThreeRenderNode', threeRenderer)


    emit('load', {
      view,
      renderer: threeRenderer,
    })
    
    return {}
  },
})
</script>
<template>
  <VathThreeRendererEvents></VathThreeRendererEvents>
  <slot></slot>
</template>
