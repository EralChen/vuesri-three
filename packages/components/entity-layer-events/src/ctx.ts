import { ClickEvent, PointerMoveEvent } from './types'
import { onEmitsFactory } from '@vunk/core/shared/utils-vue'
export const emits = {
  click: (e: ClickEvent) => e,
  'pointer-move': (e: PointerMoveEvent) => e,
}

export const createOnEmits = onEmitsFactory(emits)
