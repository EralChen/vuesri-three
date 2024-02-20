export default onBeforeRoute

import { PageContext } from 'vike/types'
import { CrowdinFileLangOptions } from '#r/crowdin'
import { beforeRouteCallbacks } from './router'

const runCbs = () => beforeRouteCallbacks.forEach((fn) => fn())

function onBeforeRoute (pageContext: PageContext) {

  const { urlPathname } = pageContext
  //  urlPathname "/zh-CN/component/view"
  const urlPaths = urlPathname.split('/')

  const mightBeLang = urlPaths[1]
  let lang = 'zh-CN'
  CrowdinFileLangOptions.some((langMedia) => {
    if (langMedia.value === mightBeLang) {
      lang = mightBeLang
      return true
    }
  })


  runCbs()


  return {
    pageContext: {
      lang,
    },
  }
}
