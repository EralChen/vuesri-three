
import { fixPath } from  './alias'
import { rollup, InputOptions, OutputOptions } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import { libExternal } from '@lib-env/build-constants'
import commonjs from '@rollup/plugin-commonjs'
import vueJsx from 'unplugin-vue-jsx/rollup'
import alias from '@rollup/plugin-alias'
import multiInput from 'rollup-plugin-multi-input'


export function rollupComponents (opts: {
  files: string[],
  entry: (file: string) => string,
  outputFile: (file: string) => string,
  external?: (string|RegExp)[]
}) {
  const builds = opts.files.map(async (file: string) => {
    const entry = opts.entry(file)  // 入口
    const inputConfig: InputOptions = {
      input: entry,
      plugins: [
        alias({
          entries: [
            { find: 'esri', replacement: '@arcgis/core' },
          ],
        }),
        nodeResolve({
          extensions: ['.json', '.js',  '.ts'],
          browser: true,
        }),
        css({
          output: 'index.css',
        }),
        
        vue({
          preprocessStyles: false,
        }),
        vueJsx({}),
 
        esbuild(),
        commonjs(),
      ],
      external: [
        ...libExternal, 
        ...opts.external ?? [],
      ],
    }
    const bundle = await rollup(inputConfig)

    const outputConfig: OutputOptions = {
      format: 'esm',
      file: opts.outputFile(file),
      paths: fixPath, // 修改别名到真实路径
    }
    await bundle.write(outputConfig)
  })
  return Promise.all(builds)
}

export async function rollupFile (opts: {
  inputFile: string | string[],
  outputFile?: string
  outputDir?: string
  external?: (string|RegExp)[]
  format: 'umd'|'esm'
  multi?: boolean
}) {
  const inputConfig = {
    input: opts.inputFile,
    
    plugins: [
      alias({
        entries: [
          { find: 'esri', replacement: '@arcgis/core' },
        ],
      }),
      nodeResolve({
        extensions: ['.js', '.json', '.ts'],
        browser: true,
      }),
      css({
        output: 'index.css',
      }),
      vue(),
      esbuild(), 
      commonjs(),
    ],
    external: [
      ...libExternal,
      ...opts.external ?? [],
    ],
    
  }

  opts.multi && inputConfig.plugins.push(multiInput())

  const outConfig: OutputOptions = {
    format: 'esm',
    paths: fixPath,
    inlineDynamicImports: true,
  }
  opts.multi && (outConfig.inlineDynamicImports = false)

  opts.outputFile && (outConfig.file = opts.outputFile)
  opts.outputDir && (outConfig.dir = opts.outputDir)


  const bundle = await rollup(inputConfig)
  return bundle.write(outConfig)

}
