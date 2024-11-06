import { series } from 'gulp'
import { taskWithName } from '@lib-env/shared'
import fsp from 'fs/promises'
import { distDir } from '@lib-env/path'

export default series(
  taskWithName('clear-dist', async () => {
    await fsp.rm(distDir, {
      recursive: true, 
      force: true,
    })
  }),

)