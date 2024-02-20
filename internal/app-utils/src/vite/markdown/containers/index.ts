import { ContainerOptions, basicContainerPlugin } from './basic'
import { demoContainerPlugin } from './demo'
import type MarkdownIt from 'markdown-it'
import { docRoot, pkgsComponentsDir } from '@lib-env/path'
import { Options } from '../preWrapper'
import { DemoOptions, PropsOptions } from '../types'
import { vuePropsContainerPlugin } from './props'

export const containerPlugin = (
  md: MarkdownIt,
  options: Partial<
    Options & DemoOptions & PropsOptions
  > = {},
  containerOptions?: ContainerOptions,
) => {

  const defaultOptions = {
    hasSingleTheme: true,
    root: docRoot,
    componentsPath: pkgsComponentsDir,
    ...options,
  }
  
  basicContainerPlugin(md, defaultOptions, containerOptions)
  
  demoContainerPlugin(md, defaultOptions)

  vuePropsContainerPlugin(md, defaultOptions)


}