import defaultConfig from '@vunk/shared/vike/vue/config'
import type { Config } from 'vike/types'

export default {

  ...defaultConfig,
  
  onRenderClient: 'import:@vunk/shared/vike/vue/onRenderClient:onRenderClient',
  onRenderHtml: 'import:@vunk/shared/vike/vue/onRenderHtml:onRenderHtml',
   

  passToClient: [
    ...defaultConfig.passToClient,
    'crowdin',
  ],

  // https://vike.dev/clientRouting
  clientRouting: true,
  hydrationCanBeAborted: true,


} as Config



