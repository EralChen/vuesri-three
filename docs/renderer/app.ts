import { createApp, createSSRApp, defineComponent, h, markRaw, nextTick, reactive } from 'vue'
import type { Component, PageProps, PageContextWithApp, PageContextWithoutApp } from 'vike-vue/dist/renderer/types'
import type { Config, PageContext } from 'vike/types'
import { setPageContext } from 'vike-vue/usePageContext'
import { objectAssign } from '../vike-vue/utils/objectAssign'
import { contentUpdatedCallbacks, ContentUpdatedCallbackHook } from './page'
export { createVueApp }


/**
 * Isomorphic function to create a Vue app.
 *
 * @param pageContext Object providing the Vue component to be rendered, the props for that component, and additional
 *                    config and data.
 * @param ssrApp Whether to use `createSSRApp()` or `createApp()`. See https://vuejs.org/api/application.html
 * @param renderHead If true, `pageContext.config.Head` will be rendered instead of `pageContext.Page`.
 */
async function createVueApp (
  pageContext: PageContext, 
  ssrApp = true, 
  renderHead = false,
) {
  
  const runCbs = (hook: ContentUpdatedCallbackHook) => {
    contentUpdatedCallbacks
      .filter((obj) => obj.hook === hook)
      .forEach((obj) => obj.callback(pageContext))
  }

  const { Page } = pageContext
  const Head = renderHead 
    ? (pageContext.config.Head as Component) 
    : undefined

  // TODO/next-major-release: remove pageProps (i.e. tell users to use data() instead of onBeforeRender() to fetch data)
  let rootComponent: Component & { 
    Page: Component; 
    pageProps: PageProps; 
    config: Config 
  }
  
  const PageWithLayout = defineComponent({
    data: () => ({
      Page: markRaw(Head ? Head : Page),
      pageProps: markRaw(pageContext.pageProps || {}),
      config: markRaw(pageContext.config),
    }),
    created () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      rootComponent = this
    },
    render () {
      const propsWithHooks = {
        ...this.pageProps,
        onVnodeMounted: () => runCbs('mounted'),
        onVnodeUpdated: () => runCbs('updated'),
        onVnodeUnmounted: () => runCbs('unmounted'),
        onVnodeBeforeUnmount: () => runCbs('beforeUnmount'),
      }
      if (!!this.config.Layout && !renderHead) {
        return h(
          this.config.Layout,
          {},
          {
            default: () => {
              return h(this.Page, propsWithHooks)
            },
          },
        )
      }
      return h(this.Page, this.pageProps)
    },
  })

  const app = ssrApp 
    ? createSSRApp(PageWithLayout) 
    : createApp(PageWithLayout)

  // We use `app.changePage()` to do Client Routing, see `onRenderClient.ts`
  objectAssign(app, {
    changePage: async (pageContext: PageContext) => {
      let returned = false
      let err: unknown
      app.config.errorHandler = (err_) => {
        if (returned) {
          // eslint-disable-next-line no-console
          console.error(err_)
        } else {
          err = err_
        }
      }
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(pageContext.Page)
      rootComponent.pageProps = markRaw(pageContext.pageProps || {})
      rootComponent.config = markRaw(pageContext.config)

      await nextTick()
      returned = true
      if (err) throw err
    },
  })

  // When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `onRenderClient.ts`).
  // We therefore use a reactive pageContext.
  const pageContextReactive = reactive(pageContext as PageContextWithoutApp)

  objectAssign(pageContext, { app })
  const pageContextWithApp = pageContext as PageContextWithApp

  await pageContextWithApp.config.onCreateApp?.(pageContext)
  await pageContextWithApp.config.onCreateAppPinia?.(pageContext)


  // Make `pageContext` accessible from any Vue component
  setPageContext(app, pageContextReactive)

  return pageContextWithApp
}



