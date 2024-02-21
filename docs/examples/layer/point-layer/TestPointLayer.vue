<script lang="ts" setup>
import { PropType, onUnmounted, watchEffect } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'
import { ThreeContext, ThreeLayer, ThreeComponent } from '@vuesri/three'
import { BoxGeometry, Clock, MathUtils, Mesh, MeshBasicMaterial } from 'three'
import { Layer, MaterialManager } from '@vuesri-three/shared/core'

export interface TestPointLayerProperties {
  source?: __esri.Graphic[]
  material?: MeshBasicMaterial
}
export interface TestPointEntityProperties {
  layer: TestPointLayer
  graphic: __esri.Graphic
}

class TestPointEntity implements ThreeComponent {
  private clock = new Clock()
  private radiansPerSecond: number = MathUtils.degToRad(30)

  layer: TestPointLayer
  graphic: __esri.Graphic
  mesh: Mesh = new Mesh()
  constructor (properties: TestPointEntityProperties) {
    this.layer = properties.layer
    this.graphic = properties.graphic
  }
  setup (e: ThreeContext) {
    const geometry = new BoxGeometry(1000, 1000, 1000)
    this.mesh = new Mesh(geometry, this.layer.material)
    /* sync add  */
    e.scene.add(this.mesh)

    this.layer.createTransform(
      this.graphic.geometry as __esri.Point,
    ).then(({ getTransform }) => {
      this.mesh.applyMatrix4(getTransform())
    })


  }
  render (e: ThreeContext): void {
    const clockDelta = this.clock.getDelta()

    if (this.mesh !== undefined) {
      this.mesh.geometry.rotateY(this.radiansPerSecond * clockDelta)
    }
    
  }
  dispose (e: ThreeContext): void {
    console.log('dispose', this.mesh)

    if (!this.mesh) return
    this.mesh.geometry.dispose()
    e.scene.remove(this.mesh)
   
  }
}

class TestPointLayer extends MaterialManager(
  Layer,
) implements ThreeLayer {
  source: __esri.Graphic[]
  entities: TestPointEntity[] = []

  constructor (properties: TestPointLayerProperties = {}) {
    super()
    this.source = properties.source || []
    properties.material && (this.material = properties.material)
  }
  setup (e: ThreeContext): void {
    super.setup(e)

    this.entities = this.source.map((graphic) => {
      return new TestPointEntity({
        layer: this,
        graphic,
      })
    })
    for (const entity of this.entities) {
      entity.setup(e)
    }
    /* layer promise 准备完毕， layer.when() */
    this.whenDef.resolve()
  }
  render (e: ThreeContext): void {
    this.entities.forEach((entity) => {
      entity.render(e)
    })
  }
  dispose (e: ThreeContext): void {
    this.entities.forEach((entity) => {
      entity.dispose(e)
    })
  }

  refresh () {
    return this.contextDef.promise.then((e) => {
      this.dispose(e)
      this.setup(e)
    })
  }
  
}

const props = defineProps({
  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },
})
const threeRenderer = useThreeRenderer()

const layer = new TestPointLayer()

watchEffect(() => {
  layer.source = props.source
  layer.refresh()
})

threeRenderer.layers.add(layer)

onUnmounted(() => {
  threeRenderer.layers.remove(layer)
})


</script>
<template>
  <slot></slot>
</template>
