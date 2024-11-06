import { ThreeContext } from '@vuesri-three/shared'
import { FtGeoJson2ExtrudeGeometry, FtTextureLoader } from '@farst-three/core'
import { ThreeLayer } from '@vuesri-three/components/layer'
import { Point } from '@vuesri/core/arcgis'
import { Mesh, MeshBasicMaterial, Object3D, RepeatWrapping, Vector2 } from 'three'
import { FeatureCollection, Geometry } from '@turf/turf'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { GeoRegionLayerOptions } from './types'
import { assign  } from 'radash'

class GeojsonPlane extends Object3D {
  geojson: FeatureCollection<Geometry> | undefined
  tLoader: FtTextureLoader
  transform: (point: [number, number]) => [number,number,number]
  constructor (public options: GeoRegionLayerOptions) {
    super()
    this.tLoader = new FtTextureLoader()
    this.render()
  }

  dispose () {        
    this.children.forEach((child) => {
      if (child && (child instanceof Mesh || child instanceof Line2)) {
        child.geometry.dispose()
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => {
            material.dispose()
          })
        } else {
          child.material.dispose()
        }
      }
    })
    this.clear()
    this.removeFromParent()
  }

  refresh () {    
    this.dispose()
    this.render()
  }

  render () {
    if (!this.geojson) return            
    const { extrudeGeometry, positions, colors } =
      new FtGeoJson2ExtrudeGeometry({
        geojson: this.geojson,
        depth: this.options.z,
        transform: (point) => {
          return this.transform(point) 
        },
      })
    
    for (const [i, position] of positions.entries()) {
      const color = colors[i]
      const line = this.genLine(position, color)
      this.add(line)
    }
    const { gradationMaterial, gridMaterial } = this.genMapMaterial()
    const mesh = new Mesh(extrudeGeometry, [gridMaterial, gradationMaterial])    
    this.add(mesh)
  }
  
  genTexture (url: string) {
    const texture = this.tLoader.load(url)
    return texture
  }

  genMapMaterial () {    
    const gradationTexture = this.genTexture('/ssr/geojson-plane/gradation.png')
    const vec = new Vector2(0.05, 0.05)
    gradationTexture.repeat.set(vec.x, vec.y)

    const gridTexture = this.genTexture('/ssr/geojson-plane/texture.png')
    const vec2 = new Vector2(0.0001, 0.0001)
    gridTexture.wrapS = RepeatWrapping
    gridTexture.wrapT = RepeatWrapping
    gridTexture.repeat.set(vec2.x, vec2.y)
 
    const gridMaterial = new MeshBasicMaterial({
      map: gridTexture,
    })

    const gradationMaterial = new MeshBasicMaterial({
      map: gradationTexture,
    })
    return {
      gradationMaterial,
      gridMaterial,
    }
  }
  genLine (positions: number[], colors: number[]) {
    const material = new LineMaterial({
      color: 0xb795eb,
      linewidth: 0.002,
      vertexColors: true,
      dashed: false,
      alphaToCoverage: true,
    })
    const geometry = new LineGeometry()
    geometry.setPositions(positions)
    geometry.setColors(colors)
    const line = new Line2(geometry, material)
    line.computeLineDistances()
    return line
  }

  set z (z: number) {
    this.options.z = z  
  }

  get z () {
    return this.options.z!
  }
}

export class GeoRegionLayer extends ThreeLayer {
  defaultOptions = {
    z: 2000,
    offsetZ: 10,
  }
  geojsonPlane: GeojsonPlane
  options: GeoRegionLayerOptions
  constructor (options?: GeoRegionLayerOptions) {
    super()
    this.options = assign(this.defaultOptions, options || {})   
  }

  setup (e: ThreeContext): void {
    super.setup(e)
    this.geojsonPlane = new GeojsonPlane(this.options)
    this.geojsonPlane.transform = (point) => {
      const points = this.getRenderTransform()
        .createRenderCoordinatesSync([
          new Point({
            x: point[0],
            y: point[1],
            z: this.z + this.offsetZ,
          }),
        ])
        
      return [points[0], points[1], points[2]]
    }    
    e.scene.add(this.geojsonPlane)
    this.ready()
  }


  refresh (): void {
    const scene = this.getContext().scene
    this.geojsonPlane.refresh()
    scene.add(this.geojsonPlane)
  }

  animate (ctx: ThreeContext) {
    ctx.renderNode?.requestRender()
  }
  dispose () {
    this.geojsonPlane.dispose()
  }

  get z () {    
    return this.options.z!
  }

  set z (z: number) {    
    this.options.z = z
    this.geojsonPlane.z = z

  }

  get offsetZ () {
    return this.options.offsetZ!
  }

  set offsetZ (offsetZ: number) {
    this.options.offsetZ = offsetZ
  }
}