import { PropType } from 'vue'
import { LoadEvent } from './types'
export const props = {
  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}