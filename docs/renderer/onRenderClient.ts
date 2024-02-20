// https://vike.dev/onRenderClient
export { onRenderClient }

import { createVueApp } from './app'
import { getTitle } from '#/vike-vue/renderer/getTitle'
import { getLang } from '#/vike-vue/renderer/getLang'
import type { OnRenderClientAsync } from 'vike/types'
import { useCopyCode } from '#/vitepress/composables/copy-code'

import { esriConfig } from '@vuesri/core/arcgis'
import { VikeVueApp } from 'vike-vue/dist/renderer/types'
// esriConfig.assetsPath = import.meta.env.VITE_BASE_URL + '/Esri'
esriConfig.apiKey = 'AAPKb14837d0d1fd48c2a9e834966b090d71jkWd8RL_697p0sRB9s87pEWRaefvBwcC_pdbOKwZd3Ka8xiulyqbHPassAKuHBxH'



let app: VikeVueApp | undefined = undefined
// 初始化代码复制功能
useCopyCode()

const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  if (!app) {
    // First rendering/hydration

    const container = document.getElementById('page-view')!
    const ssr = container.innerHTML !== ''
    const ctxWithApp = await createVueApp(pageContext, ssr)

    app = ctxWithApp.app

    await pageContext.config.onBeforeMountApp?.(ctxWithApp)

    app.mount(container)
  } else {
    // Client routing
    // See https://vike.dev/server-routing-vs-client-routing

    await app.changePage(pageContext)

    // Get the page's `title` config value, which may be different from the
    // previous page. It can even be null, in which case we should unset the
    // document title.
    const title = getTitle(pageContext)
    const lang = getLang(pageContext)

    document.title = title || ''
    document.documentElement.lang = lang || 'zh-CN'

  }
}
