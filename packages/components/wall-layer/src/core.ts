import { EntityLayer, Entity } from '@vuesri-three/shared'
import { WallEntityProperties, WallLayerProperties } from './types'
import { BufferAttribute, BufferGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, RepeatWrapping, Texture, TextureLoader } from 'three'
import { MaterialManager } from '@vuesri-three/components/manager'
import { _VathEntityLayerUtils } from '@vuesri-three/components/entity-layer'
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators'
import { defaultAlphaMapUrl } from './const'




export class WallEntity implements Entity {
  graphic: __esri.Graphic
  layer: WallLayer
  group = new Group()

  private paths: __esri.Point[][] = []

  constructor (e: WallEntityProperties) {
    this.graphic = e.graphic
    this.layer = e.layer
  }

  setup (): void {
    this.paths = this.pathsFromGraphic()
   
    const bufferGeometries  = this.paths.reduce((acc, path) => {
      const walls = this.wallsFromPath(path)
      const bufferGeometries = walls.map(wall => this.createBufferGeometry(wall))
      return acc.concat(bufferGeometries)
    }, [] as BufferGeometry[])

    /* 一面墙 */
    const subgroups = bufferGeometries.map((geometry) => {
      const g = new Group()
      const mesh = new Mesh(
        geometry,
        this.layer.material,
      )
      const alphaMesh = new Mesh(
        geometry.clone(),
        this.layer.backgroundMaterial,
      )

      g.add(mesh)
      g.add(alphaMesh)
      return g
    })

    this.group.add(...subgroups)
    
    this.layer.group.add(this.group)
    
  

  }

  render (): void {}

  dispose (): void {
    this.group.clear()
    this.layer.group.remove(this.group)
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

    const geometry = _VathEntityLayerUtils.closedGeometry(this.graphic.geometry) 

    if (
      geometry.type !== 'polyline'
      && geometry.type !== 'polygon'
    ) {
      throw new Error('geometry type must be polyline')
    }

    return _VathEntityLayerUtils.pathsFromGeometry(geometry)
  }

  private wallsFromPath (path: __esri.Point[]) {
    // 4个点一面墙， 2个Point + 2个高度点
    const walls: __esri.Point[][] = []
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i]
      const end = path[i + 1]

      let start0: __esri.Point = start
      let startZ: __esri.Point = start
      if (start.z) { // 有高度
        start0 = start.clone()
        start0.set('z', 0)
      } else { // 没有高度
        startZ = start.clone()
        startZ.set('z', this.layer.height)
      }

      let end0: __esri.Point = end
      let endZ: __esri.Point = end
      if (end.z) { // 有高度
        end0 = end.clone()
        end0.set('z', 0)
      } else { // 没有高度
        endZ = end.clone()
        endZ.set('z', this.layer.height)
      }
      


      walls.push([
        start0,
        end0,
        endZ,
        startZ,
      ])

    }
    return walls
  }


}

@subclass('vuesri.three.WallLayer')
export class WallLayer extends MaterialManager(EntityLayer) {
  
  @property({
    type: Number,
  })
    height: number = 50

  @property({
    type: Texture,
  })
    texture: Texture = new Texture()
  
  constructor (e: WallLayerProperties = {}) {
    super(e)
    e.texture && (this.texture = e.texture)

    
  }
  
  protected init (): void {
    this.material = new MeshBasicMaterial({
      side: DoubleSide,
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
      map: this.texture,
      opacity: 0.6,
    })

    this.handles.push(
      this.watch('texture', () => {
        this.getMaterial().map = this.texture
      }),
    )


    this.entities = this.source.map((g) => {
      return new WallEntity({ 
        graphic: g, 
        layer: this, 
      })
    })
  }

  render (): void {

    const texture = this.getMaterial().map
    if (!texture) return
    
    if (texture.offset.y <= 0) {
      texture.offset.set(0, 1)
    } else {
      texture.offset.set(0, texture.offset.y - 0.01)
    }

  }

  

  /* background Material  */
  private sBackgroundMaterial = Symbol('backgroundMaterial')
  private defaultBackgroundMaterial = new MeshBasicMaterial({
    color: 0xff0000,
    side: DoubleSide,
    transparent: true, // 必须设置为true,alphaMap才有效果
    depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
    opacity: 0.1,
    alphaMap: (() => {
      const texture = new TextureLoader().load(defaultAlphaMapUrl)
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      return texture
    })(),
  })
  get backgroundMaterial () {
    return this.materialMap.get(this.sBackgroundMaterial) ?? this.defaultBackgroundMaterial 
  }
  set backgroundMaterial (v) {
    this.materialMap.set(this.sBackgroundMaterial, v)
  }
  /* end of background Material  */

  getMaterial () {
    
    return this.material as MeshBasicMaterial 
  }
}
