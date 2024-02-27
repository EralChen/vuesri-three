import { EntityLayer } from '@vuesri/three'
import { inject } from 'vue'


export const useEntityLayer = () => {
  const instance = inject<EntityLayer|null>('vathEntityLayer', null)

  if (!instance) {
    throw new Error(
      'no entity layer found, make sure to provide the entity layer using the `vathEntityLayer` key on the parent component.',
    )
  }
  
  return instance
}

