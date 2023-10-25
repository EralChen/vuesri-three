<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
import { __VaThreeRenderer } from '@vuesri-three/components/three-renderer'
import { BoxGeometry, BufferGeometry, Clock, Material, MathUtils, Matrix4, Mesh, MeshStandardMaterial } from 'three'
import { externalRenderers, SpatialReference } from '@vuesri/core/arcgis'
import { useThreeRenderer } from '@vuesri-three/composables'
import { ThreeLayerContext, ThreeLayer } from '@vuesri/three'

const renderer = useThreeRenderer()


class ExampleLayer implements ThreeLayer {
      
  private clock: Clock = new Clock()
  private mesh?: Mesh<BufferGeometry, Material>

  private radiansPerSecond: number = MathUtils.degToRad(30)

  setup (
    {
      scene, view,
    }: ThreeLayerContext,
  ) {
    let geometry = new BoxGeometry(100, 100, 100)
    let material = new MeshStandardMaterial({
      color: 0xFFFF00,
      flatShading: true,
      opacity: 1,
    })

    let WGS84Position = [120, 30, 0]

    view.goTo({
      target: [WGS84Position[0], WGS84Position[1]],
      zoom: 14,
    })

    WGS84Position[2]  = 50

    let transformation = new Array(16)
    externalRenderers.renderCoordinateTransformAt(view, WGS84Position, SpatialReference.WGS84, transformation)

    this.mesh = new Mesh(geometry, material)
    scene.add(this.mesh)

    this.mesh.applyMatrix4(new Matrix4().fromArray(transformation))

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

renderer.layers.add(layer)

onUnmounted(() => {
  renderer.layers.remove(layer)
})

</script>
<template>
  <slot></slot>
</template>
