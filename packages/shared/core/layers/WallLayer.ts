import { externalRenderers } from '@vuesri/core/arcgis'
import { ThreeLayerContext, ThreeLayer } from '@vuesri/three'
import * as webMercatorUtils from '@arcgis/core/geometry/support/webMercatorUtils'
import { Matrix4, Vector2, Vector3, Mesh, MeshBasicMaterial, DoubleSide, BufferGeometry, BufferAttribute, TextureLoader, Texture, RepeatWrapping } from 'three'


export class WallLayer implements ThreeLayer {

  private alphaMesh: Mesh

  private mesh: Mesh

  private geometry: __esri.Geometry

  private height: number

  private textureUrl: string
  private texture: Texture

  private alphaMapUrl: string
  private alphaMap: Texture

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

    const paths = this.getPaths()
    paths.forEach(path => {

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

    })


    // 纹理坐标
    const t0 = new Vector2(0, 0) // 图片左下角
    const t1 = new Vector2(1, 0) // 图片右下角
    const t2 = new Vector2(1, 1) // 图片右上角
    const t3 = new Vector2(0, 1) // 图片左上角
    
    const geometry = new BufferGeometry()

    // 转换Vector3对象为一个类型化数组
    const vertices = new Float32Array(vector3List.length * 3)

    for (let i = 0; i < vector3List.length; i++) {
      vertices[i * 3] = vector3List[i].x
      vertices[i * 3 + 1] = vector3List[i].y
      vertices[i * 3 + 2] = vector3List[i].z
    }



    // 设置geometry的position属性
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))

    // 矩形
    geometry.setIndex([
      0, 1, 2,
      2, 3, 0,
    ])


    // 设置uv属性, 从下到上
    const uv = new Float32Array(
      [
        t1.x, t1.y,
        t2.x, t2.y,
        t3.x, t3.y,
        t0.x, t0.y,
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

  render (): void {
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
  getPaths (): number[][][] {
    const geometry = this.getGeometry() as __esri.Polyline

    if (geometry.type === 'polyline') { 
      return geometry.paths
    }

    return []
  }

}