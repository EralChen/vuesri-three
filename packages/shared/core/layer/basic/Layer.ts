import { ThreeLayerContext } from '@vuesri/three'
import { Matrix4, Quaternion, Vector3 } from 'three'
import { Deferred } from '@vunk/core/shared/utils-promise'
import { Point, externalRenderers, esriConfig, SpatialReference } from '@vuesri/core/arcgis'
import * as geometryService from '@arcgis/core/rest/geometryService'
import ProjectParameters from '@arcgis/core/rest/support/ProjectParameters'


export class Layer  {

  transformation = new Array(16) 

  transform = new Matrix4()  // 变换矩阵

  title: string
 
  contextDef = new Deferred<ThreeLayerContext>()

  setup (e: ThreeLayerContext): void {
    this.contextDef.resolve(e)
  }

  async genEsriPoints (ps: __esri.PointProperties[]) {
    const e = await this.contextDef.promise
    const points = new Array<__esri.Point>(ps.length)
    let serverPoints = new Array<__esri.PointProperties>(ps.length)

    ps.forEach((pointProperties, i) => {
      if (
        pointProperties.spatialReference
        && pointProperties.spatialReference.wkid !== e.view.spatialReference.wkid
      ) {
        serverPoints[i] = pointProperties
      } else {
        points[i] = new Point({
          longitude: pointProperties.longitude,
          latitude: pointProperties.latitude,
          z: pointProperties.z,
          spatialReference: e.view.spatialReference,
        })
      }
    })


    const realIndex: number[] = []
    serverPoints = serverPoints.filter((sPoint, index) => {
      if (sPoint) {
        realIndex.push(index)
        return true
      }
      return false
    })

 
    if (!serverPoints.length) {
      return points
    }

    const gs = await geometryService.project(
      esriConfig.geometryServiceUrl,
      new ProjectParameters({
        geometries: serverPoints,
        outSpatialReference: e.view.spatialReference,
      }),
    )
      
    gs.forEach((g, i) => {
      points[realIndex[i]] = g as __esri.Point
    })

   

    return points
  }


  async createTransform (
    pointProperties: __esri.PointProperties,
  ) {
    const e = await this.contextDef.promise
    const [ point ] = await this.genEsriPoints([pointProperties])

    /*
      Computes a 4x4 affine transformation matrix that
      constitutes a linear coordinate transformation from a
      local Cartesian coordinate system to the virtual world 
      coordinate system. For example, this matrix can be used
      to transform the vertices of a 3D model to the 
      rendering coordinate system.
    */
    const coordinateTransformAt = externalRenderers.renderCoordinateTransformAt(
      e.view,
      [point.x, point.y, point.z ?? 0],
      e.view.spatialReference,
      this.transformation,
    )


    const getTransform = () => {
      this.transform.fromArray(coordinateTransformAt)
      return this.transform
    }

    const decompose = (
      translation: Vector3, 
      rotation: Quaternion, 
      scale: Vector3,
    ) => {
      const transform = getTransform()
      return transform.decompose(
        translation,
        rotation,
        scale,
      )
    }

    return {
      decompose,
      getTransform,
    }

  }


  async createRenderCoordinates (
    ps: __esri.PointProperties[],
  ) {
    const e = await this.contextDef.promise
    await e.view.when()

    const points = await this.genEsriPoints(ps)

    const pos = points.reduce((a, point) => {
      a.push( 
        point.x, 
        point.y, 
        point.z ?? 0,
      )
      return a
    }, [] as number[])

    const res  = new Float32Array(pos.length)

    externalRenderers.toRenderCoordinates(
      e.view,
      pos,
      0,
      e.view.spatialReference,
      res,
      0,
      points.length,
    )


    return res
  }
}

