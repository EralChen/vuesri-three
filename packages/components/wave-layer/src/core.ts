import { FtDiffusionWaveMesh, FtDiffusionWaveMaterial, waveParamsKey } from '@farst-three/core'
import { Entity, EntityLayer, ThreeContext } from '@vuesri-three/shared'
import { CircleGeometry, Group } from 'three'
import { WaveEntityProperties, WaveLayerProperties } from './types'
import { _VathEntityLayerUtils } from '@vuesri-three/components/entity-layer'
import { Point } from '@vuesri/core/arcgis'
import { pick } from 'lodash-es'

export class WaveEntity implements Entity {
  graphic: __esri.Graphic
  layer: WaveLayer
  group = new Group()
  options?: WaveLayerProperties
  diffusionWave: FtDiffusionWaveMesh
  geometry: CircleGeometry
  material: FtDiffusionWaveMaterial
  constructor (e: WaveEntityProperties) {
    this.graphic = e.graphic
    this.layer = e.layer
  }
  setup (): void {    
    const { radius, segments, thetaStart, thetaLength } = this.graphic.attributes
    const params = pick(this.graphic.attributes, waveParamsKey)
    this.geometry = new CircleGeometry(radius || 100, segments || 64, thetaStart, thetaLength)    
    this.material = new FtDiffusionWaveMaterial({ ...params })
    this.diffusionWave = new FtDiffusionWaveMesh(this.geometry, this.material)
    this.diffusionWave.rotateX(Math.PI / 2)
    const { material } = this.diffusionWave
    if (material) {
      material.transparent = true
    }

    const point = this.pathsFromGraphic()
    this.setPosition(point[0])    
    this.layer.group.add(this.diffusionWave)
  }

  animate (): void {
    this.diffusionWave?.loop()
  }
  dispose (): void {
    this.diffusionWave?.dispose()
  }

  private pathsFromGraphic () {
    const geometry = _VathEntityLayerUtils.closedGeometry(this.graphic.geometry) 
    if (geometry.type !== 'point') {
      throw new Error('geometry type must be point')
    }
    return _VathEntityLayerUtils.pathsFromGeometry(geometry)
  }

  setPosition (point: __esri.PointProperties[]) {    
    const matrix4 = this.layer.getRenderTransform()
      .createTransformMatrix4(point[0] as Point)
    this.diffusionWave.applyMatrix4(matrix4)
  }

}

export class WaveLayer extends EntityLayer {
  constructor (options?: WaveLayerProperties) {
    super(options)
  }

  protected init (): void {
    this.entities = this.source.map((graphic) => {
      return new WaveEntity({ 
        graphic, 
        layer: this, 
      })
    })
  }
  animate (ctx: ThreeContext) {
    super.animate(ctx)
    ctx.renderNode?.requestRender()
  }

}