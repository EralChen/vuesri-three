import { externalRenderers } from '@vuesri/core/arcgis'
import { ThreeLayerContext, ThreeComponent } from '@vuesri/three'
import * as webMercatorUtils from '@arcgis/core/geometry/support/webMercatorUtils'
import { Matrix4, Vector2, Vector3, Mesh, MeshBasicMaterial, DoubleSide, BufferGeometry, BufferAttribute, TextureLoader, Texture, RepeatWrapping } from 'three'


export class WallEntity implements ThreeComponent {

  private alphaMesh: Mesh

  private mesh: Mesh

  private geometry: __esri.Geometry

  private height: number

  private textureUrl: string
  private texture: Texture

  private alphaMapUrl: string
  private alphaMap: Texture

  private path: number[][]

  updateTexture (): void {
    if (!this.textureUrl) return
    const texture = new TextureLoader().load(this.textureUrl)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    // texture.needsUpdate = true
    this.texture = texture
  }

  updateAlphaMap (): void {
    if (!this.alphaMapUrl) return
    this.alphaMap = new TextureLoader().load(this.alphaMapUrl)
  
  }

  updateAlphaMesh (): void {
 

    if (!this.alphaMesh) return

    const material = this.alphaMesh.material as MeshBasicMaterial
    
    const alphaMap = this.getAlphaMap()
    alphaMap && (material.alphaMap = alphaMap)

  }

  setup (e: ThreeLayerContext): void {
    const transformation = new Array(16)
    const vector3List: Vector3[] = [] // 顶点数组

    const path = this.getPath()
    if (!path.length) return

    path.forEach((point) => {

      // 将经纬度坐标转换为xy值
      const pointXY = webMercatorUtils.lngLatToXY(point[0], point[1])

      let coordinateTransformAt = externalRenderers.renderCoordinateTransformAt(
        e.view,
        [pointXY[0], pointXY[1], 0],
        e.view.spatialReference,
        transformation,
      )

      const transform = new Matrix4() // 变换矩阵
    

      transform.fromArray(coordinateTransformAt)


      vector3List.push(
        new Vector3(
          transform.elements[12],
          transform.elements[13],
          transform.elements[14],
        ),
      )

      coordinateTransformAt = externalRenderers.renderCoordinateTransformAt(
        e.view,
        [pointXY[0], pointXY[1], this.getHeight()],
        e.view.spatialReference,
        transformation,
      )

      transform.fromArray(coordinateTransformAt)

      vector3List.push(
        new Vector3(
          transform.elements[12],
          transform.elements[13],
          transform.elements[14],
        ),
      )



        
        

    })

    const geometry = new BufferGeometry()
    geometry.setFromPoints(vector3List)

    // 矩形
    const faceIndex = [
      0, 1, 2,
      2, 1, 3,
    ]
    geometry.setIndex(faceIndex)


    // 设置uv属性
    const uv = new Float32Array(
      [ 
        0,0,
        1,1,
        1,0,
        0,1,
        
      ],
    )



    geometry.setAttribute('uv', new BufferAttribute(uv, 2))


    const alphaMapMaterial = new MeshBasicMaterial({
      color: 0xff0000,
      side: DoubleSide,
      transparent: true, // 必须设置为true,alphaMap才有效果
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
      alphaMap: this.getAlphaMap(),
    })
    
    this.alphaMesh = new Mesh(geometry, alphaMapMaterial)

    e.scene.add(this.alphaMesh)

    const material = new MeshBasicMaterial({
      side: DoubleSide,
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响
      map: this.getTexture(),
    })


    const geometry2 = geometry.clone()

    this.mesh = new Mesh(geometry2, material)

    e.scene.add(this.mesh)

    

    

  }

  render (e: ThreeLayerContext): void {
    const texture = this.getTexture()
    if (!texture) return
    
    if (texture.offset.y <= 0) {
      texture.offset.set(0, 1)
    } else {
      texture.offset.set(0, texture.offset.y - 0.002)
    }


  }

  dispose (e: ThreeLayerContext): void {
    e.scene.remove(this.mesh)
    e.scene.remove(this.alphaMesh)
  }
  

  
  setTextureUrl (textureUrl = ''): void {
    this.textureUrl = textureUrl 
    this.updateTexture()
  }

  getTexture (): Texture | undefined {
    if (!this.texture) this.updateTexture()
    return this.texture
  }

  setAlphaMapUrl (alphaMapUrl = ''): void {
    this.alphaMapUrl = alphaMapUrl
    this.updateAlphaMap()
    this.updateAlphaMesh()
  }



  getAlphaMap (): Texture | undefined {
    if (!this.alphaMap) this.updateAlphaMap()
    return this.alphaMap
  }

  setHeight (height: number): void {
    this.height = height
  }
  getHeight (): number {
    return this.height
  }

  setGeometry (geometry: __esri.Geometry): void {
    this.geometry = geometry
  }
  getGeometry (): __esri.Geometry {
    return this.geometry
  }
 

  getPath (): number[][] {
    return this.path
  }
  setPath (path: number[][]): void {
    this.path = path
  }


}

