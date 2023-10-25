import { ThreeLayerContext, ThreeLayer } from '@vuesri/three'
import { WallEntity } from '@vuesri-three/shared/core'
// import { Polyline } from '@vuesri/core/arcgis'
import type { Position } from '@turf/turf'


export class WallLayer implements ThreeLayer {

  entities: WallEntity[] = []

  geometry: __esri.Geometry

  height: number

  textureUrl: string
  
  alphaMapUrl: string

  get lines ():[Position, Position][] {
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

  updateEntities (): void {
  
    this.entities = []
    this.lines.forEach(line => {
      const entity = this.createEntity({
        path: [line[0], line[1]],
      })
      this.entities.push(entity)
    })
    
  }

  setGeometry (geometry: __esri.Geometry): void {
    this.geometry = geometry
    this.updateEntities()
  }


  setHeight (height: number): void {
    this.height = height
    this.entities.forEach(entity => entity.setHeight(height))
  }

  setTextureUrl (url = ''): void {
    this.textureUrl = url
    this.entities.forEach(entity => entity.setTextureUrl(url))
  }

  setAlphaMapUrl (url = ''): void {
    this.alphaMapUrl = url
    this.entities.forEach(entity => entity.setAlphaMapUrl(url))
  }

  setup (e: ThreeLayerContext) {
    this.entities.forEach(entity => entity.setup(e))
  }
  render (e: ThreeLayerContext) {
    this.entities.forEach(entity => entity.render(e))
  }
  dispose (e: ThreeLayerContext) {
    this.entities.forEach(entity => entity.dispose(e))
    this.entities = []
  }

  createEntity (e: {
    path: number[][]
  }) {
    const entity = new WallEntity()

    entity.setPath(e.path)
    entity.setAlphaMapUrl(this.alphaMapUrl)
    entity.setTextureUrl(this.textureUrl)
    entity.setHeight(this.height)

    return entity

  }

 
  
}

