/// <reference types="vike-vue/dist/renderer/types" />
/// <reference types="vike-vue/dist/renderer/+config" />

import { ApiReturnType } from '@vunk/core'
import { rCrowdinFilesAsReflect, CrowdinFileLang } from '../renderer/crowdin'

declare global {
  namespace Vike {
    interface PageContext {
      crowdin: ApiReturnType<typeof rCrowdinFilesAsReflect>
      lang: CrowdinFileLang
    }
  }

  namespace VikePackages {
    interface ConfigVikeVue {
        /**
         * @deprecated
         * use `pageContext.lang` instead
         */
        lang?: string;
  
    }
  }
}


export {}
