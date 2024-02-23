import { ThreeContext, ThreeComponent } from '@vuesri/three'
import { Mesh, MeshBasicMaterial, BufferGeometry, BufferAttribute } from 'three'
// import type { WallLayer } from '@vuesri-three/shared/core'
import type { Position } from '@turf/turf'


export class WallEntity implements ThreeComponent {

  layer: any
  path: [Position, Position]
  height = 0



  alphaMesh: Mesh
  mesh: Mesh
  bufferGeometry: BufferGeometry


  constructor (e: {
    layer: WallLayer
    path: [Position, Position]
    height: number
  }) {
    this.layer = e.layer
    this.path = e.path
    this.height = e.height
  }

  async setup (e: ThreeContext) {
    this.bufferGeometry = await this.createBufferGeometry()

    this.alphaMesh = new Mesh(
      this.bufferGeometry.clone(),
      this.layer.baseMaterial,
    )
    this.mesh = new Mesh(
      this.bufferGeometry.clone(),
      this.layer.material,
    )

    e.scene.add(this.mesh)
    e.scene.add(this.alphaMesh)

  }
  
  render (e: ThreeContext): void {
    if (!this.mesh) return
    const material = this.mesh.material as MeshBasicMaterial
    const texture = material.map 
    if (!texture) return
    
    if (texture.offset.y <= 0) {
      texture.offset.set(0, 1)
    } else {
      texture.offset.set(0, texture.offset.y - 0.001)
    }
  }
  dispose (e: ThreeContext): void {
    e.scene.remove(this.mesh)
    e.scene.remove(this.alphaMesh)
  }

  async createBufferGeometry () {

    const renderCoordinates = await this.layer.createRenderCoordinates(
      this.getPoints(),
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

  getPoints (): __esri.PointProperties[] {
    return [
      [this.path[0][0], this.path[0][1], 0],
      [this.path[1][0], this.path[1][1], 0],
      [this.path[1][0], this.path[1][1], this.height],
      [this.path[0][0], this.path[0][1], this.height],
    ].map(item => {
      return {
        longitude: item[0],
        latitude: item[1],
        z: item[2],
      }
    })
  }



}

