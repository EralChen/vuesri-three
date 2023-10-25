import { inject } from 'vue'
import { ThreeRenderer } from '@vuesri-three/shared/core'

export const useThreeRenderer = () => {
  const threeRenderer = inject<
    ThreeRenderer | null
  >('vaThreeRenderer', null)

  if (!threeRenderer) {
    throw new Error(
      'No ThreeRenderer provided!',
    )
  }
  
  return threeRenderer
}

