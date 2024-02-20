import baseAnchorPlugin from 'markdown-it-anchor'
import type MarkdownIt from 'markdown-it'
import { slugify } from '@mdit-vue/shared'

export const anchorPlugin = (
  md: MarkdownIt,
) => {
  md.use(baseAnchorPlugin, {
    slugify,
    permalink: baseAnchorPlugin.permalink.linkInsideHeader({
      symbol: '&ZeroWidthSpace;',
      renderAttrs: (slug, state) => {
        // Find `heading_open` with the id identical to slug
        const idx = state.tokens.findIndex((token) => {
          const attrs = token.attrs
          const id = attrs?.find((attr) => attr[0] === 'id')
          return id && slug === id[1]
        })
        // Get the actual heading content
        const title = state.tokens[idx + 1].content
        return {
          'aria-label': `Permalink to "${title}"`,
        }
      },
      
    }),
  })

}
