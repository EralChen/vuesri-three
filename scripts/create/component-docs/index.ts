import { errorAndExit, readJson, taskWithName, writeJson } from '@lib-env/shared'
import { series } from 'gulp'
import mri from 'mri'
import { docRoot } from '@lib-env/path'
import path from 'path'
import { createMd, createVue } from './temp'
import fsp from 'fs/promises'
import { camelize, capitalize } from 'vue'
type MriDataP = keyof typeof import('../../../docs/.vitepress/crowdin/zh-CN/pages/component.json')
interface MriData {
  p: MriDataP // parent
  l: string // link aaa-bbb
  t: string // text AaaBbb
}

const argv = process.argv.slice(2)
const mriData = mri<MriData>(argv)
if (!mriData.l) {
  errorAndExit(new Error('请输入 link 和 title 作为参数'))
}

if (!mriData.t) {
  mriData.t = capitalize(camelize(mriData.l))
}

export default series(
  
  taskWithName('crowdin pages add link', async () => {
    // 读到 crowdin pages 中的 component.json 目录
    const componentJsonFile = path.resolve(docRoot, './.vitepress/crowdin/zh-CN/pages/component.json')
    const json = readJson(componentJsonFile)
  
    const whereAdd = json[mriData.p]
    if (!whereAdd) {
      return errorAndExit(new Error(`componentJson 中 找不到 p = ${mriData.p}  的键`))
    }

    whereAdd.children ||= []

    whereAdd.children.push({
      link: '/' + mriData.l,
      text: mriData.t,
    })

    writeJson(componentJsonFile, json, 2)


  }),

  taskWithName('add md to docs', async () => {
    const componentMdPath = path.resolve(docRoot, './zh-CN/component')
    
    // 如果没有这个目录，就创建
    try {
      await fsp.mkdir(componentMdPath, {
        recursive: true,
      })
    } catch {}
    
    const mdStr = createMd(mriData.t, mriData.l)

    await fsp.writeFile(
      path.resolve(componentMdPath, `${mriData.l}.md`),
      mdStr,
      {
        encoding: 'utf-8',
      },
    )

  }),

  taskWithName('add vue to docs examples', async () => {
    const theExamplesPath = path.resolve(docRoot, `./examples/${mriData.l}`)
    await fsp.mkdir(theExamplesPath, {
      recursive: true,
    })

    await fsp.writeFile(
      path.resolve(theExamplesPath, `basic.vue`),
      createVue(),
      {
        encoding: 'utf-8',
      },
    )

  }),

)