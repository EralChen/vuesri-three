import ElementPlus from 'element-plus'
import Entry from '@vuesri/three'
import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'
import '@vunk/core/index.css'
import '@vuesri/core/index.css'



export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.use(Entry)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
