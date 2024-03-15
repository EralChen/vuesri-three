import { RepeatWrapping, Texture, TextureLoader } from 'three'
import { LoadEvent } from './types'
import { PropType } from 'vue'
import { defaultTextureUrl } from './const'



export const props = {

  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },
  texture: {
    type: Object as PropType<Texture>,
    default: () => {
      const texture = new TextureLoader().load(defaultTextureUrl)
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      return texture
    },
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}