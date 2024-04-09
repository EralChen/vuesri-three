import { PropType } from 'vue'
import { LoadEvent } from './types'
import { FeatureCollection, Geometry, Properties } from '@turf/turf'
export const props = {
  source: {
    type: Object as PropType<FeatureCollection<Geometry, Properties>>,
    default: () => ({}),
  },
  z: {
    type: Number,
    default: 2000,
  },
  offsetZ: {
    type: Number,
    default: 10,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}