import { onUnmounted } from 'vue'
import type { ThreeRenderer } from './core'
import { ThreeComponent } from './types'


export const useAddLayer = (
  threeRenderer: ThreeRenderer,
  layer: ThreeComponent,
) => {
  threeRenderer.layers.add(layer)

  onUnmounted(() => {
    threeRenderer.layers.remove(layer)
  })
}
