import { ThreeContext, ThreeLayer } from '@vuesri/three'
import { Layer, MaterialManager, WallEntity, TextureManager } from '@vuesri-three/shared/core'
// import { Polyline } from '@vuesri/core/arcgis'
import type { Position } from '@turf/turf'
import { DoubleSide, MeshBasicMaterial, RepeatWrapping, Texture, TextureLoader } from 'three'


export interface WallLayerProperties {
  height?: number
  textureUrl?: string
  alphaMapUrl?: string
  geometry?: __esri.Geometry
}


export class WallLayer extends MaterialManager(
  TextureManager(Layer),
) implements ThreeLayer {
  height = 0
  entities: WallEntity[] = []
  geometry: __esri.Geometry | undefined

  

  constructor (e: WallLayerProperties = {}) {
    super()
    e.height && (this.height = e.height)
    e.textureUrl && (this.textureUrl = e.textureUrl)
    e.alphaMapUrl && (this.alphaTextureUrl = e.alphaMapUrl)
    e.geometry && (this.geometry = e.geometry)

  }
  
  
  setup (e: ThreeContext): void {
    super.setup(e)

    this.baseMaterial = new MeshBasicMaterial({
      color: 0xff0000,
      side: DoubleSide,
      transparent: true, // 必须设置为true,alphaMap才有效果
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
      alphaMap: this.alphaTexture,
      opacity: 0.1,
    })
    
    this.material = new MeshBasicMaterial({
      side: DoubleSide,
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
      map: this.texture,
      opacity: 0.6,
    })
    

    this.entities.forEach((entity) => {
      entity.setup(e)
    })
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


  getLines ():[Position, Position][] {
    const res: [Position, Position][] = []
    
    if (!this.geometry) return res

    const geometry = this.geometry as __esri.Polyline | __esri.Polygon
  
    let paths:number[][][] = []

    if (geometry.type === 'polyline') {
      paths = geometry.paths
    }

    if (geometry.type === 'polygon') {
      paths = geometry.rings
    }


    paths.map((path) => {

      const firstPoint = path[0]

      path.forEach((point, index) => {
        const isLast = index === path.length - 1

        if (
          isLast
          && firstPoint[0] === point[0] && firstPoint[1] === point[1]
        ) {
          // 如果首位闭合，则不添加最后的线段
          return
        }

        const nextIndex = isLast ? 0 : index + 1
        const nextPoint = path[nextIndex]
    


        res.push([point, nextPoint])
      })

    })

    
    return res
  }

  async updateEntities (e: {
    geometry?: __esri.Geometry,
    height?: number,
  }) {
    const ctx = await this.contextDef.promise
    this.entities.forEach((entity) => {
      entity.dispose(ctx)
    })

    e.geometry && (this.geometry = e.geometry)

    e.height && (this.height = e.height)

    if (typeof e.height === 'number') {
      this.height = e.height
    }

    const lines = this.getLines()
    this.entities = lines.map((line) => {
      const entity = this.createEntity({
        path: line,
        height: this.height,
      })
      entity.setup(ctx)
      return entity
    })


  }

  createEntity (e: {
    path: [Position, Position],
    height: number,
  }): WallEntity {
    const entity = new WallEntity({
      layer: this,
      path: e.path,
      height: e.height,
    })
    return entity
  }



  createTexture (p: {
    textureUrl: string
  }): Texture {
    const texture = new TextureLoader().load(p.textureUrl)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    this.texture = texture
    return this.texture
  }


  private _alphaTextureUrl = ''
  get alphaTextureUrl (): string {
    return this._alphaTextureUrl
  }

  /**
   * @description 设置透明纹理
   * @param {string} v - 透明纹理地址
   */
  set alphaTextureUrl (v: string) {
    if (v === this._alphaTextureUrl) {
      return
    }

    const texture = this.createTexture({
      textureUrl: v,
    })
    this._alphaTextureUrl = v
    this.alphaTexture = texture
    if (this.baseMaterial) {
      this.baseMaterial.alphaMap = texture
    }
  }

  private _textureUrl = ''
  get textureUrl (): string {
    return this._textureUrl
  }

  /**
   * @description 设置纹理
   * @param {string} v - 纹理地址
   */
  set textureUrl (v: string) {
    if (v === this._textureUrl) {
      return
    }
    const texture = this.createTexture({
      textureUrl: v,
    })
    this._textureUrl = v
    this.texture = texture

    const material = this.getMaterial()
    if (material) {
      material.map = texture
    }
    
  }

  readonly baseMaterialKey = 'baseMaterial' as const
  get baseMaterial (): MeshBasicMaterial {
    return this.materialMap
      .get(this.baseMaterialKey) as MeshBasicMaterial
  }
  set baseMaterial (v: MeshBasicMaterial) {
    this.materialMap.set(this.baseMaterialKey, v)
  }

  readonly alphaTextureKey = 'alphaTexture' as const

  get alphaTexture (): Texture {
    return this.textureMap
      .get(this.alphaTextureKey) as Texture
  }
  set alphaTexture (v: Texture) {
    this.textureMap.set(this.alphaTextureKey, v)
  }

  getMaterial (): MeshBasicMaterial {
    return this.material as MeshBasicMaterial
  }

}

