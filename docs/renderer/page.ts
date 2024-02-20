
import { PageContext } from 'vike/types'
import { onUnmounted } from 'vue'
export let contentUpdatedCallbacks: {
  callback: ContentUpdatedCallback
  hook: ContentUpdatedCallbackHook
}[] = []


/**
 * Register callback that is called every time the markdown content is updated
 * in the DOM.
 */
export function onContentUpdated (
  fn: ContentUpdatedCallback,
  options: { hooks: ContentUpdatedCallbackHook[] } = {
    hooks: ['mounted', 'updated', 'unmounted'],
  },
) {
  const { hooks } = options
  hooks.forEach((hook) => {
    contentUpdatedCallbacks.push({
      callback: fn,
      hook,
    })
  })
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks
      .filter((obj) => obj.callback !== fn)
  })
}


export type ContentUpdatedCallbackHook = 'mounted' | 'updated' | 'unmounted' | 'beforeUnmount'

export type ContentUpdatedCallback = (pageContext: PageContext) => void
