import { LIB_ALIAS, LIB_NAME } from './name'

const arcgisExternalRule = /^@arcgis\/core/

export const libExternal = [
  'vue',
  /^@vunk\/core/,
  /^@vunk\/skzz/,
  /^@vunk\/form/,
  /^element-plus/,
  arcgisExternalRule,
  new RegExp(`^${LIB_NAME}`),
  new RegExp(`^${LIB_ALIAS}`),
]

export const hasArcgisExternalRule = libExternal.includes(arcgisExternalRule)


export const filePathIgnore = [
  'gulpfile.ts',
  'package.json',
  'node_modules',
  '**/README.md',
  '**/__tests__/**.ts',
]

