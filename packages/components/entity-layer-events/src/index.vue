<script lang="ts">
import { useThreeRenderer, useEntityLayer } from '@vuesri-three/composables'
import { emits } from './ctx'
import { defineComponent, onBeforeUnmount } from 'vue'
import { sMitter } from '@vuesri/core/shared'
import { createMitterToggleHandler } from '@vuesri/core/shared/mitter'
import { _VathLayerUtils } from '@vuesri-three/components/layer'

export default defineComponent({
  name: 'VathEntityLayerEvents',
  emits,
  setup (props, { emit }) {
    const renderer = useThreeRenderer()
    const layer = useEntityLayer()
    const mitter = renderer[sMitter]
    const MitterToggleHandler = createMitterToggleHandler(mitter)

    const clickMitterToggleHandler = new MitterToggleHandler('click', (e) => {
      if (
        e.feature && _VathLayerUtils.isDescendantOfGroup(
          e.feature.object, 
          layer.group,
        )
      ) {

        const graphic = e.feature.object.userData?.graphic
        emit('click', {
          ...e,
          layer: layer,
          result: {
            graphic,
          },
        })
      }
    })
    clickMitterToggleHandler.add()
    onBeforeUnmount(() => {
      clickMitterToggleHandler.remove()
    })


    const pointerMoveMitterToggleHandler = new MitterToggleHandler('pointer-move', (e) => {
      if (
        e.feature && _VathLayerUtils.isDescendantOfGroup(
          e.feature.object, 
          layer.group,
        )
      ) {
        const graphic = e.feature.object.userData?.graphic
        emit('pointer-move', {
          ...e,
          layer: layer,
          result: {
            graphic,
          },
        })
      }
    })

    pointerMoveMitterToggleHandler.add()
    onBeforeUnmount(() => {
      pointerMoveMitterToggleHandler.remove()
    })

    return () => null
  },
})
</script>
