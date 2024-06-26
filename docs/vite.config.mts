import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vike from 'vike/plugin'

import { AliasOptions, UserConfig, defineConfig, loadEnv } from 'vite'
import { appRoot, srcRoot } from './path.config'

import path from 'path'

import Inspect from 'vite-plugin-inspect'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Components from 'unplugin-vue-components/vite'

import { createMarkdownPlugin } from '@vunk/shared/vite/markdown'
import { fixPath } from '@lib-env/build-utils'
import { workRoot } from '@lib-env/path'
import unocss from 'unocss/vite'


const alias: AliasOptions = [
  {
    find: '#s',
    replacement: srcRoot,
  },
  {
    find: '#r',
    replacement: path.resolve(appRoot,'./renderer'),
  },
  {
    find: '#p',
    replacement: path.resolve(appRoot,'./pages'),
  },
  {
    find: '#e',
    replacement: path.resolve(appRoot,'./examples'),
  },
  {
    find: '#',
    replacement: path.resolve(appRoot),
  },

  {
    find: 'esri/',
    replacement: '@arcgis/core/',
  },
]


export default defineConfig(async ({ mode }) => {

  const env = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv
  const base = env.VITE_BASE_URL + '/'

  const config: UserConfig = {
    
    base,
    resolve: {
      alias,
    },
    
    server: {
      port: 9995,
    },
    ssr: {
      noExternal: [
        '@vuesri-core/**',
        '@arcgis/core/**',
        '@vunk/skzz/**',
        '@skzz/platform/**',
        'esri/**',
        '@vunk/gsap/**',
      ],
    
    },
    build: {
      target: ['esnext'],
    },
    
    plugins: [
      
      vike({
        prerender: true, 
      }),


      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      vueJsx({}),
      
      unocss(),

      await createMarkdownPlugin({
        base: base,
        demoContainerPluginSettings: {
          root: path.resolve(appRoot, './examples'),
          codeSourceTransform: fixPath,
        },
        sourceContainerPluginSettings: {
          root: path.resolve(workRoot, 'packages'),
        },
        propsContainerPluginSettings: {
          root: path.resolve(workRoot, 'packages/components'),
        },
      }),

      Components({
        resolvers: [
          IconsResolver(),
        ],
      }),

      Icons(),
      Inspect(),
    ],
    // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vike's CI
    optimizeDeps: { 
      esbuildOptions: {
        target: 'esnext',
        define: {
          global: 'globalThis',
        },
        supported: {
          bigint: true, 
        },
      },

    },
  }
  return config
})