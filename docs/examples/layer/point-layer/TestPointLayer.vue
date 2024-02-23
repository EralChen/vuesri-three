<script lang="ts" setup>
import { PropType, watchEffect, watch } from 'vue'
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
  private handles: __esri.WatchHandle[] = []
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

    this.handles.push(
      this.watch('visible', (v) => {
        this.entities.forEach((entity) => {
          entity.mesh.visible = v
        })
      }),
    )
    /* layer promise 准备完毕， layer.when() */
    this.ready()
  }
  render (): void {
    this.entities.forEach((entity) => {
      entity.render()
    })
  }
  dispose (e: ThreeContext): void {
    this.handles.forEach((handle) => handle.remove())
    this.handles.length = 0

    this.entities.forEach((entity) => {
      entity.dispose(e)
    })
  }

  refresh () {
    const ctx = this.getContext()
    this.dispose(ctx)
    this.setup(ctx)
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

layer.source = props.source
watch(() => props.source, (v) => {
  layer.source = v
  layer.refresh()
})


watchEffect(() => {
  layer.visible = props.visible
})

_VaLayerUse.useAddLayer(threeRenderer, layer)


</script>
<template>
  <slot></slot>
</template>
