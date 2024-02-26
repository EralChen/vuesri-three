import { inject } from 'vue'
import { ThreeRenderer } from '@vuesri-three/shared'
import { sMitter } from '@vuesri/core/shared'
import { __VathThreeRendererEvents } from '@vuesri-three/components/three-renderer-events'

export const useThreeRenderer = () => {
  const threeRenderer = inject<(ThreeRenderer & {
      [sMitter]: __VathThreeRendererEvents.Mitter
  }) | null>('vathThreeRenderer', null)

  if (!threeRenderer) {
    throw new Error(
      'No ThreeRenderer provided!',
    )
  }
  
  return threeRenderer
}

