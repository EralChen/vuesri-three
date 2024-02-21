import { ThreeComponent, ThreeRenderer } from '@vuesri-three/shared'
import { onUnmounted } from 'vue'



export const useAddLayer = (
  threeRenderer: ThreeRenderer,
  layer: ThreeComponent,
) => {
  threeRenderer.layers.add(layer)
  onUnmounted(() => {
    threeRenderer.layers.remove(layer)
  })
}
