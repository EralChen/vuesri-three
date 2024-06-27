import { PropType } from 'vue'
import { LoadEvent } from './types'
import { _VathEntityLayerEventsCtx } from '@vuesri-three/components/entity-layer-events'
import { Color } from 'three'
export const props = {
  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },

  /**
   * 曲线的半径
   */
  radius: {
    type: Number as PropType<number>,
    default: 1500,
  },

  color: {
    type: Object as PropType<Color>,
    default: new Color(0x85A9A9),
  },

  /**
   * 材质 textureUrl
   */
  textureUrl: {
    type: String,
    default: '',
  },

}

export const emits = {
  load: (e: LoadEvent) => e,
  ..._VathEntityLayerEventsCtx.emits,
}