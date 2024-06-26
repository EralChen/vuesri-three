import { Entity, EntityLayer, ThreeContext } from '@vuesri-three/shared'
import { MaterialManager } from '@vuesri-three/components/manager'
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators'
import { CatmullRomCurve3, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, QuadraticBezierCurve3, RepeatWrapping, Texture, TextureLoader, TubeGeometry, Vector3 } from 'three'
import { ArcEntityProperties } from './types'
import { _VathEntityLayerUtils } from '@vuesri-three/components/entity-layer'
import { Point } from '@vuesri/core/arcgis'
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine'

type ArcPath = [__esri.Point, __esri.Point, __esri.Point]

export class ArcEntity implements Entity {
  layer: ArcLayer
  group = new Group()
  graphic: __esri.Graphic

  private arcs: ArcPath[] = []

  constructor (e: ArcEntityProperties) {
    this.layer = e.layer
    this.graphic = e.graphic
  }

  setup (): void {
    // this.arcs = this.pathsFromGraphic()
    const threeGeometries = this.paths.map(path => this.createThreeGeomety(path))
    const userData = {
      graphic: this.graphic,
    }
  
    const subgroups = threeGeometries.map((geometry) => {

      // 一根管道
      const g = new Group()
      g.add(new Mesh(geometry, new MeshBasicMaterial({
        color: 0x00ff00,
        side: DoubleSide,
      })))

      return g
    })

    this.group.add(...subgroups)
    this.layer.group.add(this.group)
  }
  render (): void {}
  dispose (): void {
    this.group.clear()
    this.layer.group.remove(this.group)
  }

  private createThreeGeomety (pipe: __esri.Point[]) {
    const renderTransform = this.layer.getRenderTransform()

    const renderCoordinates = renderTransform.createRenderCoordinatesSync(
      pipe,
    )

    let v3List = unflat(renderCoordinates, 3).map(
      item => new Vector3(item[0], item[1], item[2]),
    )



    
    new QuadraticBezierCurve3(
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
     * @type {TubeGeometry}
     */
    const geometry = new TubeGeometry(curve, 20, 1000, 8, false)

    return geometry
    
  }


  private createArcs (): ArcPath[] {
    const paths = this.pathsFromGraphic()
    const arcs: ArcPath[] = []
    paths.forEach(path => {
      const controlPoints = this.addControlPoints(path)
      for (let i = 0; i < controlPoints.length - 2; i += 2) {
        arcs.push([
          controlPoints[i],
          controlPoints[i + 1],
          controlPoints[i + 2],
        ])
      }
    })
    return arcs
  }

  private addControlPoints (
    points: __esri.Point[],
  ) {
    const newPoints: __esri.Point[] = [];
  
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      
      const midPoint = new Point({
        x: (p0.x + p1.x) / 2,
        y: (p0.y + p1.y) / 2,
        z: (p0.z + p1.z) / 2 + this.calculateHeightBasedOnLength([p0, p1]),
        spatialReference: p0.spatialReference,
      });
      

      newPoints.push(p0, midPoint);
    }
    
    newPoints.push(points[points.length - 1]); // Add the last point
    
    return newPoints;
    

  }


  private pathsFromGraphic (): __esri.Point[][] {
    const geometry = this.graphic.geometry as __esri.Polyline
    if (!geometry) {
      throw new TypeError('geometry is not a polyline')
    }
    
    return _VathEntityLayerUtils.pathsFromGeometry(geometry)
  }


  private calculateHeightBasedOnLength (
    points: __esri.Point[], 
    heightFactor = 40 * 1000
  ) {
    let totalLength = 0;
  
    // Calculate total length of the path
    for (let i = 0; i < points.length - 1; i++) {

      const segmentLength = geometryEngine.distance(points[i], points[i + 1]);

      totalLength += segmentLength;
    }
  
    // Use the total length to determine the control point height
    const controlPointHeight = totalLength * heightFactor;
    
    console.log('controlPointHeight', controlPointHeight)
    return controlPointHeight;
  }
  
}


@subclass('vuesri.three.ArcLayer')
export class ArcLayer extends EntityLayer {

  protected init () {

    this.entities = this.source.map(item => {
      return new ArcEntity({
        graphic: item,
        layer: this,
      })
    })
    
  }


  
}
