import { inject } from 'vue'
import { ThreeRenderer } from '@vuesri-three/shared/core'
import { sMitter } from '@vuesri/core/shared'
import { __RendererEvents } from '@vuesri-three/components/renderer'

export const useThreeRenderer = () => {
  const threeRenderer = inject<
    (ThreeRenderer & {
      [sMitter]: __RendererEvents.Mitter
    }) | null
  >('vaThreeRenderer', null)

  if (!threeRenderer) {
    throw new Error(
      'No ThreeRenderer provided!',
    )
  }
  
  return threeRenderer
}

