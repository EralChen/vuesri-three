import { LoadEvent } from './types'
export const props = {
  axesHelper: {
    type: Boolean,
    default: false,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}