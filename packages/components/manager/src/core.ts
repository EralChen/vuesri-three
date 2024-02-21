import { GConstructor } from '@vunk/core'
import { Material, MeshBasicMaterial, Texture } from 'three'


/**
 * Mixin 提供材质存储
 * @param Base 
 * @returns 
 */
export function MaterialManager<
  TBase extends GConstructor 
> (Base: TBase) {
  
  /**
   * @classdesc MaterialManagerMixing
   * @property {Map<string, Material | Material[]>} materialMap - 提供材质存储
   * @property {} material - 默认材质
   * @property {string} default - 默认键名
   */
  return class MaterialManagerMixing extends Base {

    materialMap: Map<string, Material | Material[]> = new Map([
      ['default', new MeshBasicMaterial({ color: 0xff0000 })],
    ])
    
    readonly defaultKey = 'default' as const

    get material (): Material | Material[] {
      return this
        .materialMap
        .get(this.defaultKey) as Material | Material[]
    }

    set material (v: Material | Material[]) {
      this.materialMap.set(this.defaultKey, v)
    }

  }

}


/**
 * Mixin 提供纹理存储
 * @param Base 
 * @returns 
 */
export function TextureManager<
  TBase extends GConstructor
> (Base: TBase) {
    
  /**
    * @classdesc TextureManagerMixing
    * @property {Map<string, Texture | Texture[]>} textureMap - 提供纹理存储
    * @property {} texture - 默认纹理
    * @property {string} default - 默认键名
    * 
    */
  return class TextureManagerMixing extends Base {
      
    textureMap: Map<string, Texture> = new Map([
      ['default', new Texture() ],
    ])
      
    readonly defaultKey = 'default' as const
  
    get texture (): Texture {
      return this
        .textureMap
        .get(this.defaultKey) as Texture 
    }
  
    set texture (v: Texture) {
      this.textureMap.set(this.defaultKey, v)
    }
  
  }
}
