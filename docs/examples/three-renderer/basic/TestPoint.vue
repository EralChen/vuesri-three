<script lang="ts" setup>
import { PropType, onBeforeUnmount } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'
import { _VaLayerUse } from '@vuesri-three/components/layer'
import { ThreeComponent, ThreeContext } from '@vuesri-three/shared'
import { createTransformMatrix4 } from '@vuesri-three/components/transform'
import * as THREE from 'three'
import { sMitter } from '@vuesri/core'
import { createMitterToggleHandler } from '@vuesri/core/shared/mitter'

const props = defineProps({
  point: {
    type: Object as PropType<__esri.Point>,
    required: true,
  },
})
const threerd = useThreeRenderer()
const mitter = threerd[sMitter]
const MitterToggleHandler = createMitterToggleHandler(mitter)


class CustomComponent implements ThreeComponent {
  point: __esri.Point
  mesh?: THREE.Mesh
  private clock = new THREE.Clock()
  private radiansPerSecond: number = THREE.MathUtils.degToRad(30)

  constructor (props: { point: __esri.Point }) {
    this.point = props.point   
  }
  setup (e: ThreeContext): void {
    const geometry = new THREE.BoxGeometry(1000, 1000, 1000)
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xffff00,
    })
    this.mesh = new THREE.Mesh(geometry, material)
    e.scene.add(this.mesh)

    /* mesh 应用矩阵变换，调整到地理坐标系中 */
    const transform = createTransformMatrix4(e.view, this.point)
    this.mesh.applyMatrix4(transform)
  }

  render (): void {
    const clockDelta = this.clock.getDelta()

    if (this.mesh !== undefined) {
      this.mesh.geometry.rotateY(this.radiansPerSecond * clockDelta)
    }
  }
  dispose (e: ThreeContext): void {
    if (this.mesh) {
      this.mesh.geometry.dispose()
      e.scene.remove(this.mesh)
    }
  }
}

const layer = new CustomComponent({
  point: props.point,
})
_VaLayerUse.useAddLayer(threerd, layer)


/* 点击事件 */
const clickMitterToggleHandler = new MitterToggleHandler('click', (e) => {
  if (e.feature && e.feature.object === layer.mesh) {
    console.log('e.feature', e.feature)
    console.log('layer.mesh', layer.mesh)
    window.alert('点击了立方体')
  }
})
clickMitterToggleHandler.add()
onBeforeUnmount(() => {
  clickMitterToggleHandler.remove()
})
/* end of 点击事件 */

</script>
<template>
  <slot></slot>
</template>
