import { ThreeLayerContext, ThreeLayer } from '@vuesri/three'
import { WallEntity } from '@vuesri-three/shared/core'


export class WallLayer implements ThreeLayer {

  entities: WallEntity[] = []

  geometry: __esri.Geometry

  height: number

  textureUrl: string
  
  alphaMapUrl: string

  updateEntities (): void {
    const geometry = this.geometry as __esri.Polyline | __esri.Polygon

    if (geometry.type === 'polyline') {

      const paths = geometry.paths

      paths.forEach(path => {
        const entity = this.createEntity({
          path,
        })
        this.entities.push(entity)
      })

    }
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

