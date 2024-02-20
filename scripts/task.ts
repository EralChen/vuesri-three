import {series} from 'gulp'
import fs from 'fs/promises'
import path from 'path'
import { docRoot } from '@lib-env/path'
import { taskWithName } from '@lib-env/shared'
import glob from 'fast-glob'

// 找到 docRoot/component-md/*.md
const mdfiles = glob('./component-md/*.md', {
  cwd: docRoot,
  absolute: true,
})


export default series(
  taskWithName('custom task', async () => {
    const files = await mdfiles
    console.log(files)
    // 转移文件到 docRoot/pages/zh-CN/component/${filename}/+Page.md
    const pagesDir = path.resolve(docRoot, './pages/zh-CN/component')

    for (const file of files) {
      const filename = path.basename(file, '.md')
      const pageFile = path.resolve(pagesDir, `./${filename}/+Page.md`)
      const dir = path.dirname(pageFile)
      await fs.mkdir(dir, {
        recursive: true,
      })

      const filecontent = await fs.readFile(file, {
        encoding: 'utf-8',
      })


      fs.writeFile(pageFile, filecontent, {
        encoding: 'utf-8',
      })
    }




  }),
)
