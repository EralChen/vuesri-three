<script lang="ts" setup>
import { PropType, watchEffect } from 'vue'
import { useThreeRenderer } from '@vuesri-three/composables'
import { ThreeContext, ThreeComponent } from '@vuesri/three'
import { BoxGeometry, Clock, MathUtils, Mesh, MeshBasicMaterial } from 'three'
import { MaterialManager } from '@vuesri-three/shared/core'
import { ThreeLayer, _VaLayerUse, extentFromGraphics } from '@vuesri-three/components/layer'


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
    this.mesh.visible = this.layer.visible

    /* sync add  */
    e.scene.add(this.mesh)

    const transform =  this.layer
      .getRenderTransform()
      .createTransformMatrix4(
        this.graphic.geometry as __esri.Point,
      )
    this.mesh.applyMatrix4(transform)


  }
  render (): void {
    const clockDelta = this.clock.getDelta()

    if (this.mesh !== undefined) {
      this.mesh.geometry.rotateY(this.radiansPerSecond * clockDelta)
    }
    
  }
  dispose (e: ThreeContext): void {
    if (!this.mesh) return
    this.mesh.geometry.dispose()
    e.scene.remove(this.mesh)
   
  }
}


class TestPointLayer extends MaterialManager(
  ThreeLayer,
) {
  source: __esri.Graphic[]
  entities: TestPointEntity[] = []

  constructor (properties: TestPointLayerProperties = {}) {
    super()
    this.source = properties.source || []
    properties.material && (this.material = properties.material)
  
  }
  setup (e: ThreeContext): void {
    super.setup(e)
    this.fullExtent = extentFromGraphics(this.source)

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
    this.ready()
  }
  render (): void {
    this.entities.forEach((entity) => {
      entity.render()
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
  visible: {
    type: Boolean,
    default: true,
  },
  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },
})
const threeRenderer = useThreeRenderer()

const layer = new TestPointLayer()

const testLayer = new ThreeLayer()


watchEffect(() => {
  layer.source = props.source
})

watchEffect(() => {
  // layer.visible = props.visible
  layer.set({
    visible: props.visible,
  })
  testLayer.set({
    visible: props.visible,
  })

  console.log('layer.visible', layer.visible)
})

testLayer.watch('visible', (v) => {
  console.log('testLayer.visible', v)
})

_VaLayerUse.useAddLayer(threeRenderer, layer)


</script>
<template>
  <slot></slot>
</template>
