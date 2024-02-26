import { capitalize } from 'vue'
import { LIB_PRE } from '@lib-env/build-constants'

// vk => Vk
const pre = capitalize(LIB_PRE)

export const createIndexStr = capName => `import { App } from 'vue'
import ${pre}${capName} from './src/index.vue'
export * as __${pre}${capName} from './src/types'

${pre}${capName}.install = (app: App): void => {
  app.component(${pre}${capName}.name, ${pre}${capName})
}
export {
  ${pre}${capName},
}
export default ${pre}${capName}
`

export const createTypesStr = () => `
import { ThreeRenderer } from '@vuesri-three/shared'

export interface LoadEvent {
  renderer: ThreeRenderer
  view: __esri.SceneView
  layer: any
}

export {}
`

export const createVueStr = (capName:string) => `<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${pre}${capName}',
  emits,
  props,
  setup (props, { emit }) {
    return {}
  },
})
</script>
<template>
  <div>${capName}</div>
</template>
`

export const createCtxStr = () => `import { PropType } from 'vue'
import { LoadEvent } from './types'
export const props = {
  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}`