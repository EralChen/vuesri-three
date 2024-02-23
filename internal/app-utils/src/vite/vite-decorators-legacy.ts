import { Plugin } from 'vite'
import { transformSync } from '@babel/core'


export function decoratorsLegacy (options: {
  includes?: string[]
}) {
  const includes = options.includes ?? []
  return {
    name: 'vite-decorators-legacy',
    
    transform (code: string, id: string) {
      if (includes.length === 0) {
        return code
      }
      if (
        includes.some((include) => id.includes(include)) 
         && id.endsWith('.ts')
      ) {
        const res = transformSync(code, {
          plugins: [
            [
              '@babel/plugin-proposal-decorators', 
              { 'legacy': true },
            ],
            '@babel/plugin-proposal-class-properties',
          ],
        })
        return res?.code
      }
      return code
    },
  } satisfies Plugin
}

