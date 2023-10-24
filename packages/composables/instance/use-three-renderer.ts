import { inject } from 'vue'
import { __VaThreeRenderer } from '@vuesri-three/components/three-renderer'

export const useThreeRenderer = () => {
  const threeRenderer = inject<
    __VaThreeRenderer.ThreeRenderer | null
  >('vaThreeRenderer', null)

  if (!threeRenderer) {
    throw new Error(
      'No ThreeRenderer provided!',
    )
  }
  
  return threeRenderer
}

