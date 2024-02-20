
import type { Config, ConfigEffect } from 'vike/types'
import { onRenderClient } from './onRenderClient'
import { onRenderHtml } from './onRenderHtml'


// Depending on the value of `config.meta.ssr`, set other config options' `env`
// accordingly.
// See https://vike.dev/meta#modify-existing-configurations
const toggleSsrRelatedConfig: ConfigEffect = ({ configDefinedAt, configValue }) => {
  if (typeof configValue !== 'boolean') {
    throw new Error(`${configDefinedAt} should be a boolean`)
  }

  return {
    meta: {
      // When the SSR flag is false, we want to render the page only in the
      // browser. We achieve this by then making the `Page` implementation
      // accessible only in the client's renderer.
      Page: {
        env: configValue
          ? { server: true, client: true } // default
          : { client: true },
      },
    },
  }
}


export default {
  onRenderHtml,
  onRenderClient,


  // TODO/next-major-release: remove pageProps (i.e. tell users to use data() instead of onBeforeRender() to fetch data)
  // TODO/next-major-release: remove support for setting title over onBeforeRender()
  // A page can define an onBeforeRender() hook to be run on the server, which
  // can fetch data and return it as additional page context. Typically it will
  // return the page's root Vue component's props and additional data that can
  // be used by the renderers.
  // It is a cumulative config option, so a web app using vike-vue can extend
  // this list.
  passToClient: ['pageProps', 'title', 'crowdin', 'lang',  'fromHtmlRenderer'],

  clientRouting: true,
  hydrationCanBeAborted: true,
  meta: {
    Head: {
      env: { server: true },
    },
    Layout: {
      env: { server: true, client: true },
    },
    title: {
      env: { server: true, client: true },
    },
    description: {
      env: { server: true },
    },
    favicon: {
      env: { server: true },
    },
    lang: {
      env: { server: true, client: true },
    },

    ssr: {
      env: { config: true },
      effect: toggleSsrRelatedConfig,
    },
    stream: {
      env: { server: true },
    },
    onCreateApp: {
      env: { server: true, client: true },
    },
    onCreateAppPinia: {
      env: { server: true, client: true },
    },
    onAfterRenderSSRApp: {
      env: { server: true },
    },
    onBeforeMountApp: {
      env: { server: false, client: true },
    },
  },
} satisfies Config
