import { EntityLayer, ThreeContext, Entity } from '@vuesri-three/shared'
import { WallEntityProperties } from './types'
import { BufferAttribute, BufferGeometry, Group } from 'three'
import { MaterialManager, TextureManager } from '@vuesri-three/components/manager'
import { _VaEntityLayerUtils } from '@vuesri-three/components/entity-layer'
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators'




export class WallEntity implements Entity {
  graphic: __esri.Graphic
  layer: WallLayer
  group = new Group()

  constructor (e: WallEntityProperties) {
    this.graphic = e.graphic
    this.layer = e.layer
  }

  setup (e: ThreeContext): void {
      
  }

  render (e: ThreeContext): void {
        
  }

  dispose (e: ThreeContext): void {
      
  }


  /**
   * 根据墙点位，创建 `BufferGeometry`
   * @param wall 4个点
   * @returns 
   */
  private createBufferGeometry (
    wall: __esri.Point[],
  ) {

    const renderCoordinates = this.layer.getRenderTransform()
      .createRenderCoordinatesSync(
        wall,
      )

    const geometry = new BufferGeometry()
    geometry.setAttribute(
      'position',
      new BufferAttribute(
        renderCoordinates, 
        3,
      ),
    )
    // 矩形
    const faceIndex = [
      0, 1, 2,
      2, 3, 0,
    ]
    geometry.setIndex(faceIndex)


    // 设置uv属性
    const uv = new Float32Array(
      [ 
        1, 0,
        0, 0,
        1, 1,
        0, 1,
      ],
    )


    geometry.setAttribute('uv', new BufferAttribute(uv, 2))

    
    return geometry
  }

  private pathsFromGraphic () {

    const geometry = _VaEntityLayerUtils.closedGeometry(this.graphic.geometry) 

    if (
      geometry.type !== 'polyline'
      && geometry.type !== 'polygon'
    ) {
      throw new Error('geometry type must be polyline')
    }

    return _VaEntityLayerUtils.pathsFromGeometry(geometry)
  }

  private wallsFromPath (path: __esri.Point[]) {
    // 4个点一面墙， 2个Point + 2个高度点
    const walls: __esri.Point[][] = []
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i]
      const end = path[i + 1]

      const startZ = start.clone()
      startZ.set('z', this.layer.height)
      const endZ = end.clone()
      endZ.set('z', this.layer.height)

      walls.push([
        start,
        end,
        endZ,
        startZ,
      ])

    }
  }


}

@subclass('vuesri.three.WallLayer')
export class WallLayer extends MaterialManager(EntityLayer) {
  @property({
    type: Number,
  })
    height: number = 100
  
  protected init (): void {
    this.entities = this.source.map((g) => {
      return new WallEntity({ 
        graphic: g, 
        layer: this, 
      })
    })
  }
}
