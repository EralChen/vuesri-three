import { PropType } from 'vue'
import { Row } from './types'
import { __SkAppTablesV1 } from '@skzz-template/components/app-tables-v1'
import { SetDataEvent, UnsetDataEvent } from '@vunk/core'
export const props = {
  modelValue: {
    type: Object as PropType<Row[]>,
    default: () => ([]),
  },
  tableColumns: {
    type: Array as PropType<__SkAppTablesV1.Column[]>,
    default: () => ([]),
  },
  buttons: {
    type: Object as PropType<Record<string, string[]>>,
    default: () => ({}),
  },
  
}

export const emits = {
  check: null,
  'update:modelValue': (e: Row[]) => e,
  'setData:buttons': (e: SetDataEvent) => e,
  'unsetData:buttons': (e: UnsetDataEvent) => e,
}