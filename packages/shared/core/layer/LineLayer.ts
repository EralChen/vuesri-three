import { Layer, MaterialManager, TextureManager } from '@vuesri-three/shared/core'
import { ThreeComponent, ThreeContext  } from '@vuesri/three'
import { DoubleSide, MeshBasicMaterial, RepeatWrapping, Texture, TextureLoader } from 'three'

export interface LineLayerProperties {
  /**
   * 管线之中流动的材质
   */
  textureUrl?: string
  geometry?: __esri.Polyline
}

export class LineLayer extends MaterialManager(
  TextureManager(
    Layer,
  ),
) implements ThreeComponent {

  geometry: __esri.Polyline | undefined




  setup (e: ThreeContext): void {
    super.setup(e)

    // 外壳材质
    this.baseMaterial = new MeshBasicMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.25,
    })

    // 管道中间流动的材质
    this.flowMaterial = new MeshBasicMaterial({
      color: 0x85A9A9,
      side: DoubleSide,
      map: this.map,
      transparent: true,
      depthWrite: false,
      opacity: 1,
    })

    this.whenDef.resolve()

  }
  render (e: ThreeContext): void {
    //
  }
  dispose (e: ThreeContext): void {
    //
  }


  /**
   * 创建管道中间流动的材质
   * @param p 
   * @returns 
   */
  createTexture (p: {
    textureUrl: string
  }): Texture {
    const texture = new TextureLoader().load(p.textureUrl)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    this.texture = texture
    return this.texture
  }
  

  /* 材质字段 */
  readonly baseMaterialKey = 'baseMaterial' as const
  get baseMaterial (): MeshBasicMaterial {
    return this.materialMap
      .get(this.baseMaterialKey) as MeshBasicMaterial
  }
  set baseMaterial (v: MeshBasicMaterial) {
    this.materialMap.set(this.baseMaterialKey, v)
  }

  // 管道中间流动的材质
  readonly flowMaterialKey = 'flowMaterial' as const
  get flowMaterial (): MeshBasicMaterial {
    return this.materialMap
      .get(this.flowMaterialKey) as MeshBasicMaterial
  }
  set flowMaterial (v: MeshBasicMaterial) {
    this.materialMap.set(this.flowMaterialKey, v)
  }
  /* end of 材质字段 */


}