import path from 'path'
import type { Plugin } from 'vite'
import { glob } from 'fast-glob'
import { appRoot } from '../../path.config'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>


function getRelativeDemoPath (
  fullPath: string,
  name: string,
) {
  const regex = new RegExp(`.*?${name}/(.*)`)
  const match = fullPath.match(regex)

  if (match) {
    // match[1] 包含捕获组中的匹配部分
    return name + `/${match[1]}`
  } else {
    // 如果没有匹配，返回原始路径
    return fullPath
  }
}

export function MarkdownTransform (): Plugin {
  return {
    name: 'element-plus-md-transform',

    enforce: 'pre',

    async transform (code, id) {
      if (!id.endsWith('.md')) return

      let componentId = path.basename(id, '.md')
      
      if (componentId === '+Page') { // 如果是入口文件
        // 取上一级目录名
        componentId = path.basename(path.dirname(id))
      }

      // 遍历 examples 目录，找到对应的组件目录下所有的 .vue 文件
      const vueExamples = await glob(`${componentId}/**/*.vue`, {
        cwd: path.resolve(appRoot, './examples'),
        absolute: true,
      })
  
      const demoRaws = vueExamples.map(path => {
    
        const relativePath = getRelativeDemoPath(
          path,  componentId,
        )


        return {
          key: relativePath,
          value: `defineAsyncComponent(() => import('#e/${relativePath}'))`,
        }
      })


  

      
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          ` import { defineAsyncComponent } from 'vue'
            const demos = {
              ${demoRaws.map(raw => `'${raw.key}': ${raw.value}`).join(',\n')}
            }
            // console.log(demos) 
            // ######
          `,
        ],
      }


      return combineMarkdown(
        code,
        [
          combineScriptSetup(append.scriptSetups), 
          ...append.headers,
        ],
        append.footers,
      )
    },
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[],
) => {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex =
    firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

