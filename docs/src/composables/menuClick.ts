import { onScopeDispose } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import { ListenerToggle } from '@skzz/platform/shared/utils-event'

const useMenuClick = () => {

  const listenerToggle = new ListenerToggle('click', upLinkClickToItem)
 
  // listenerToggle.add()

  onScopeDispose(() => {
    listenerToggle.remove()
  })

  function upLinkClickToItem (e: MouseEvent) {
    const path = e.composedPath()
    const elMenuItem = path.find((item) => {
      return item instanceof Element && item.classList.contains('el-menu-item')
    }) as HTMLElement

    if (elMenuItem) {

      elMenuItem.getElementsByTagName('a')[0]?.click()                 
    }
  }

  return {
    listenerToggle,
  }
}

export const useSharedMenuClick = createSharedComposable(useMenuClick)

