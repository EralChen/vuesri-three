<script lang="ts" setup>
import { BoxGeometry, Clock, Group, MathUtils, Mesh, Object3DEventMap } from 'three'
import { Entity, ThreeContext } from '@vuesri-three/shared'
import { EntityLayer } from '@vuesri-three/components/entity-layer'
import { MaterialManager } from '@vuesri-three/components/manager'
import { PropType, watch, watchEffect } from 'vue'
import { _VathLayerUse } from '@vuesri-three/components/layer'
import { useThreeRenderer } from '@vuesri-three/composables'

interface TestPointEntityProperties {
  layer: TestPointLayer
  graphic: __esri.Graphic
}
class TestPointEntity implements Entity {
  private clock = new Clock()
  private radiansPerSecond: number = MathUtils.degToRad(30)
  group: Group<Object3DEventMap> =  new Group()
  layer: TestPointLayer
  graphic: __esri.Graphic
  private mesh: Mesh = new Mesh()
  constructor (properties: TestPointEntityProperties) {
    this.layer = properties.layer
    this.graphic = properties.graphic
  }
  setup () {
    const geometry = new BoxGeometry(1000, 1000, 1000)
    this.mesh = new Mesh(geometry, this.layer.material)

    this.group.add(this.mesh)

    this.layer.group.add(this.group)

    const transform = this.layer
      .getRenderTransform()
      .createTransformMatrix4(
        this.graphic.geometry as __esri.Point,
      )

    this.group.applyMatrix4(transform)
  }
  animate (ctx: ThreeContext): void {
    const clockDelta = this.clock.getDelta()

    if (this.mesh !== undefined) {
      this.mesh.geometry.rotateY(this.radiansPerSecond * clockDelta)
      ctx.renderNode?.requestRender()
    }
  
    
  }
  dispose (): void {
    this.layer.group.remove(this.group)
  }
}

class TestPointLayer extends MaterialManager(EntityLayer) {
  protected init () {
    this.entities = this.source.map((graphic) => {
      return new TestPointEntity({
        layer: this,
        graphic,
      })
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

layer.source = props.source

watch(() => props.source, (v) => {
  layer.source = v
  layer.refresh()
})

watchEffect(() => {
  layer.visible = props.visible
})

_VathLayerUse.useAddLayer(threeRenderer, layer)




</script>
<template>
  <slot></slot>
</template>
