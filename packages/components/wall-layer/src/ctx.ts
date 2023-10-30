import { PropType } from 'vue'

export const props = {
  geometry: {
    type: Object as PropType<__esri.Geometry>,
    default: undefined,
  },
  height: {
    type: Number,
    default: undefined,
  },
  textureUrl: {
    type: String,
    default: undefined,
  },

  alphaTextureUrl: {
    type: String,
    default: undefined,
  },
  
}

export const emits = {
}