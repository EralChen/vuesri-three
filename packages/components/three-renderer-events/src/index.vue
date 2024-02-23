<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'
import { useSceneView } from '@vuesri/core'
import { sMitter } from '@vuesri/core/shared'
import { __VaView } from '@vuesri/core/components/view'
import { Raycaster, ArrowHelper, Vector3 } from 'three'
import { ToggleHandler } from '@vunk/core/shared/utils-class'
import { AnyFunc } from '@vunk/core'
import { createRenderCoordinates } from '@vuesri-three/components/transform'
import { props } from './ctx'
import { Mitter, EventName } from './types'

export default defineComponent({
  name: 'VaThreeRendererEvents',
  props,
  setup (props) {

    const threeRd = useThreeRenderer()
    const view = useSceneView()

    const viewMitter = view[sMitter] as __VaView.Mitter
    const threeMitter = threeRd[sMitter] as Mitter


    class RendererOnToggleHandler extends ToggleHandler {
      eventName: EventName
      private handler: AnyFunc
      raycaster = new Raycaster()
      camera = threeRd.camera
      scene = threeRd.scene
      constructor (
        eventName: EventName, 
        handler: AnyFunc,
      ) {
        super()
        this.eventName = eventName
        this.handler = handler
      }
      add () {
        const mouseHandle = async (e) => {
          const mapPoint = (e as __VaView.ClickEvent).event.mapPoint 
          || view.toMap((e as __VaView.PointerMoveEvent).event)
          await this.updateRaycaster(mapPoint)
          this.handler(e)
        }

        viewMitter.on(this.eventName, mouseHandle)
        this.removeHandler = () => {
          viewMitter.off(this.eventName, mouseHandle)
        }
      }

      async updateRaycaster (
        point: __esri.Point,
      ) {
        const [x, y, z] = await createRenderCoordinates(view, [point])
        const origin = this.camera.position.clone()
        const direction = new Vector3(x, y, z).sub(origin).normalize()
        this.raycaster.set(
          origin,
          direction,
        )
      }
      
    }


    const leftClickHandler = new RendererOnToggleHandler('click', async function (
      this: RendererOnToggleHandler, 
      e: __VaView.ClickEvent,
    ) {
      const features = this.raycaster.intersectObjects(
        this.scene.children,
      )

      if (props.arrowHelper) {
        const arrowHelper = new ArrowHelper(
          this.raycaster.ray.direction,
          this.raycaster.ray.origin,
          100 * 1000,
          0xff0000,
        )
        this.scene.add(arrowHelper)
      }

        
      threeMitter.emit('click', {
        ...e,
        view: e.view as __esri.SceneView,
        raycaster: this.raycaster,
        features: features,
        feature: features[0],
        threeRenderer: threeRd,
      })

        
        
    })

    const pointerMoveHandler = new RendererOnToggleHandler('pointer-move', async function (
      this: RendererOnToggleHandler, 
      e: __VaView.PointerMoveEvent,
    ) {
      const features = this.raycaster.intersectObjects(
        this.scene.children,
      )
      threeMitter.emit('pointer-move', {
        ...e,
        view: e.view as __esri.SceneView,
        raycaster: this.raycaster,
        features: features,
        feature: features[0],
        threeRenderer: threeRd,
      })
  
    })


    onMounted(() => {
      leftClickHandler.add()
      pointerMoveHandler.add()
    })
    onBeforeUnmount(() => {
      leftClickHandler.remove()
      pointerMoveHandler.remove()
    })
    


    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
