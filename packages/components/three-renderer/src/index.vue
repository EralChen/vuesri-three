<script lang="ts">
import { emits, props } from './ctx'
import { defineComponent, provide } from 'vue'
import { useSceneView } from '@vuesri/core/composables'
import { ThreeRenderer } from '@vuesri-three/shared/core'
import { RendererEvents } from '@vuesri-three/components/renderer'
import mitt from 'mitt'
import { sMitter } from '@vuesri/core/shared'
export default defineComponent({
  name: 'VaThreeRenderer',
  components: {
    RendererEvents,
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
  <RendererEvents />
  <slot></slot>
</template>
