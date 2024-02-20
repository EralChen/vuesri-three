import { PluginOption } from 'vite'
import { getEnv } from '../env'

export function windowEnvPlugin (): PluginOption {
  let mode = ''
  
  return {
    configResolved (resolvedConfig) {
      // 存储最终解析的配置
      mode = resolvedConfig.mode
    },

    name: 'window-env-plugin',
    transform (code) {
      if (code.includes('import.meta.env.VITE_')) {
        code = code.replace(/import\.meta\.env\.(VITE_.+)/g, (_, p1) => {
          return `window.__env__.${p1}`
        })
      }
      return code
    },
    transformIndexHtml (html) {
      return html.replace(`<script id="env"></script>`,
        `<script id="env">
          ${'window.__env__ =' + JSON.stringify(getEnv(mode), null, 2)}
        </script>`)
    },
  }
}