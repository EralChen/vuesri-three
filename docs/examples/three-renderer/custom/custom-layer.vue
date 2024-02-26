<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
import { __VathThreeRenderer } from '@vuesri-three/components/three-renderer'
import { BoxGeometry, BufferGeometry, Clock, Material, MathUtils, Mesh, MeshBasicMaterial, MeshStandardMaterial } from 'three'
import { Point } from '@vuesri/core/arcgis'
import { useThreeRenderer } from '@vuesri-three/composables'
import { ThreeContext, ThreeLayer } from '@vuesri/three'
import { Layer, MaterialManager } from '@vuesri-three/shared/core'
import { sMitter } from '@vuesri/core/shared'
import { createMitterToggleHandler } from '@vuesri/core/shared/mitter'
import { __RendererEvents } from '@vuesri-three/components/renderer'


const renderer = useThreeRenderer()
const mitter = renderer[sMitter]

const MitterToggleHandler = createMitterToggleHandler(mitter)



const point = new Point({
  longitude: 120.80657463861,
  latitude: 30,
  z: 100,
})

class ExampleLayer extends MaterialManager(Layer) implements ThreeLayer {
      
  private clock: Clock = new Clock()
  mesh?: Mesh<BufferGeometry, Material>

  private radiansPerSecond: number = MathUtils.degToRad(30)

  
  async setup (
    e: ThreeContext,
  ) {
    super.setup(e)


    this.material = new MeshStandardMaterial({
      color: 0x00ff00,
    })

    
    
    const { view, scene } = e

    view.goTo({
      target: point,
      zoom: 15,
    })
    const { getTransform } = await this.createTransform(point)
    let geometry = new BoxGeometry(100, 100, 100)
    this.mesh = new Mesh(geometry, this.material)
    scene.add(this.mesh)
    this.mesh.applyMatrix4(getTransform())


  }

  render () {
    const clockDelta = this.clock.getDelta()

    if (this.mesh !== undefined) {
      this.mesh.geometry.rotateY(this.radiansPerSecond * clockDelta)
    }
  }

  dispose () {
    if (this.mesh !== undefined) {
      this.mesh.material.dispose()
      this.mesh.geometry.dispose()
    }
  }
}
const layer = new ExampleLayer()

const leftClickHandler = new MitterToggleHandler('click', (e) => {
  
  if (e.feature && e.feature.object === layer.mesh) {
    window.alert('点击了立方体')
    // emit('click')
  }
})

leftClickHandler.add()
renderer.layers.add(layer)

onUnmounted(() => {
  renderer.layers.remove(layer)
  leftClickHandler.remove()
})

</script>
<template>
  <slot></slot>
</template>
