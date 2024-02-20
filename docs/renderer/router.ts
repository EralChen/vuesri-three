import { AnyFunc } from '@vunk/core'
import { onUnmounted } from 'vue'

export let beforeRouteCallbacks: AnyFunc[] = []


export function onBeforeRoute (fn: AnyFunc) {
  beforeRouteCallbacks.push(fn)
  onUnmounted(() => {
    beforeRouteCallbacks = beforeRouteCallbacks.filter((f) => f !== fn)
  })
}
