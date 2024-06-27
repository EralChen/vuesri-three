import { Entity, EntityLayer, ThreeContext } from '@vuesri-three/shared'
import { MaterialManager } from '@vuesri-three/components/manager'
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators'
import {  Color, DoubleSide, Group,  Mesh, MeshBasicMaterial, QuadraticBezierCurve3, Texture, TubeGeometry, Vector3 } from 'three'
import { ArcEntityProperties } from './types'
import { _VathEntityLayerUtils } from '@vuesri-three/components/entity-layer'
import { Point } from '@vuesri/core/arcgis'
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine'
import { unflat } from '@vunk/shared/array'



type ArcPath = [__esri.Point, __esri.Point, __esri.Point]

export class ArcEntity implements Entity {
  layer: ArcLayer
  group = new Group()
  graphic: __esri.Graphic

  private paths: __esri.Point[][] = []


  private lines: TubeGeometry[] = []
  constructor (e: ArcEntityProperties) {
    this.layer = e.layer
    this.graphic = e.graphic
  }

  setup (): void {
    this.lines = []
    this.paths = this.pathsFromGraphic()
    const threeGeometries = this.paths.reduce((a, path) => {
      const arcs = unflat(path, 3) as ArcPath[]
      arcs.forEach(arc => {
        a.push(this.createThreeGeomety(arc))
      })
      return a    
    }, [] as TubeGeometry[])

  
    const subgroups = threeGeometries.map((geometry) => {
      const g = new Group()
      
      const line = new Mesh(geometry, this.layer.getMaterial())


      this.lines.push(line.geometry)

      g.add(line)
      return g
    })

    this.group.add(...subgroups)
    this.layer.group.add(this.group)

  }

  dispose (): void {
    this.group.clear()
    this.layer.group.remove(this.group)
  }

  private createThreeGeomety (arc: ArcPath) {
    const renderTransform = this.layer.getRenderTransform()

    const renderCoordinates = renderTransform.createRenderCoordinatesSync(
      arc,
    )

    const v3List = unflat(renderCoordinates, 3).map(
      item => new Vector3(item[0], item[1], item[2]),
    )
    
    const curve = new QuadraticBezierCurve3(
      v3List[0],
      v3List[1],
      v3List[2],
    )

    /**
     * path 管道的形状 曲线
     * tubularsSegements    管道分成多少段
     * radius   管道的半径
     * radialSegments   管道口是几边形 分为多少段
     * closed 收尾是否相连 封闭
     */
    const geometry = new TubeGeometry(
      curve,
      50,
      this.layer.radius,
      8,
      false,
    )

    return geometry
  }


  private addControlPoints (
    points: __esri.Point[],
  ) {
    const newPoints: __esri.Point[] = []
  
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i]
      const p1 = points[i + 1]

      const p0z = p0.z || 0
      const p1z = p1.z || 0
      
      const midPoint = new Point({
        x: (p0.x + p1.x) / 2,
        y: (p0.y + p1.y) / 2,
        z: (p0z + p1z) / 2 + this.calculateHeightBasedOnLength([p0, p1]),
        spatialReference: p0.spatialReference,
      })

      newPoints.push(p0, midPoint)
    }
    
    newPoints.push(points[points.length - 1]) // Add the last point
    
    return newPoints
    

  }


  private pathsFromGraphic (): __esri.Point[][] {
    const geometry = this.graphic.geometry as __esri.Polyline
    if (!geometry) {
      throw new TypeError('geometry is not a polyline')
    }
    const paths =  _VathEntityLayerUtils.pathsFromGeometry(geometry)

    return paths.map(path => {
      if (path.length < 2) {
        throw new TypeError('path must have at least two points')
      }
      return this.addControlPoints(path)
    })
  }


  private calculateHeightBasedOnLength (
    points: __esri.Point[], 
    heightFactor = 40 * 1000,
  ) {
    let totalLength = 0
  
    // Calculate total length of the path
    for (let i = 0; i < points.length - 1; i++) {

      const segmentLength = geometryEngine.distance(points[i], points[i + 1])

      totalLength += segmentLength
    }
  
    // Use the total length to determine the control point height
    const controlPointHeight = totalLength * heightFactor
    
    return controlPointHeight
  }
  
}


@subclass('vuesri.three.ArcLayer')
export class ArcLayer extends MaterialManager(EntityLayer)  {


  @property({
    type: Number,
  })
  public radius = 1500

  @property({
    type: Color,
  })
  public color = new Color(0x85A9A9)

  @property({
    type: Texture,
  })
  public texture: Texture|null  = null

  protected init () {
    this.material = new MeshBasicMaterial({
      side: DoubleSide,
      transparent: true,
      depthWrite: false,
      opacity: 1,
      color: this.color,
      map: this.texture,
    })

    this.entities = this.source.map(item => {
      return new ArcEntity({
        graphic: item,
        layer: this,
      })
    })

    this.handles.push(
      this.watch('radius', () => {
        this.refresh()
      }),
    )


    this.handles.push(
      this.watch('color', () => {
        this.getMaterial().color = this.color
        this.getContext().renderNode?.requestRender()
      }),
    )

    this.handles.push(
      this.watch('texture', () => {
        this.getMaterial().map = this.texture
        this.getContext().renderNode?.requestRender()
      }),
    )


  }

  animate (ctx: ThreeContext): void {
    if (!this.visible) return
    const texture = this.getMaterial().map
    if (!texture) return
    texture.offset.x -= 0.01
    ctx.renderNode?.requestRender()
  }


  getMaterial () {
    return this.material as MeshBasicMaterial
  }


  
}
