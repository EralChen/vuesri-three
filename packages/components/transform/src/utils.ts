import * as geometryService from '@arcgis/core/rest/geometryService'
import ProjectParameters from '@arcgis/core/rest/support/ProjectParameters'
import { Point, esriConfig, externalRenderers } from '@vuesri/core/arcgis'
import { Matrix4 } from 'three'

/**
 * 创建 __esri.Point 实例
 * @param view 
 * @param ps 
 * @returns 
 */
export async function createEsriPoints (
  view: __esri.SceneView,
  ps: __esri.PointProperties[],
) {
  
  const points = new Array<__esri.Point>(ps.length)
  let serverPoints = new Array<__esri.PointProperties>(ps.length)

  ps.forEach((pointProperties, i) => {
    if (!pointProperties) return
    if (
      pointProperties.spatialReference
      && pointProperties.spatialReference.wkid !== view.spatialReference.wkid
    ) {
      serverPoints[i] = pointProperties
    } else {
      points[i] = new Point({
        longitude: pointProperties.longitude,
        latitude: pointProperties.latitude,
        z: pointProperties.z,
        spatialReference: view.spatialReference,
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
      outSpatialReference: view.spatialReference,
    }),
  )
    
  gs.forEach((g, i) => {
    points[realIndex[i]] = g as __esri.Point
  })

  return points
}

/**
 * 同步的方式，创建 __esri.Point 实例
 * 要求点位坐标系 与 view.spatialReference 一致
 * @param view 
 * @param points 
 * @returns 
 */
export function createEsriPointsSync (
  view: __esri.SceneView,
  points: __esri.PointProperties[],
): __esri.Point[] {
  
  return points.map(point => {
    if (!point.spatialReference) {
      return new Point({
        longitude: point.longitude,
        latitude: point.latitude,
        z: point.z,
        x: point.x,
        y: point.y,
        spatialReference: view.spatialReference,
      })
    }

    if (point.spatialReference.wkid === view.spatialReference.wkid) {
      return point as __esri.Point
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        'createEsriPointsSync: spatialReference.wkid !== view.spatialReference.wkid', 
        '由 Point 通过 longitude 、latitude 转化',
      )
      return new Point({
        longitude: point.longitude,
        latitude: point.latitude,
        z: point.z,
        spatialReference: view.spatialReference,
      })
    }
  })
}


/**
 * 通过 EsriPoints 创建渲染坐标
 * @param view 
 * @param ps __esri.PointProperties[]
 * @returns 
 */
export async function createRenderCoordinates (
  view: __esri.SceneView,
  ps: __esri.PointProperties[],
) {
  await view.when()

  const points = await createEsriPoints(view, ps)

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
    view,
    pos,
    0,
    view.spatialReference,
    res,
    0,
    points.length,
  )


  return res
}

/**
 * 同步的方式，通过 EsriPoints 创建渲染坐标
 * 要求 view 含有 spatialReference
 * point坐标系 与 view.spatialReference 一致
 * @param view 
 * @param points 
 * @returns 
 */
export function createRenderCoordinatesSync (
  view: __esri.SceneView,
  points: __esri.Point[],
) {
  points = createEsriPointsSync(view, points)
  const pos = points.reduce((a, point) => {
    a.push( 
      point.x ?? point.longitude, 
      point.y ?? point.latitude, 
      point.z ?? 0,
    )
    return a
  }, [] as number[])

  const res  = new Float32Array(pos.length)

  externalRenderers.toRenderCoordinates(
    view,
    pos,
    0,
    view.spatialReference,
    res,
    0,
    points.length,
  )

  return res
}

/**
 * 
 * 根据地理坐标创建 4x4 仿射变换矩阵
 * 可将 WebGL 坐标系的物体变换到地理坐标系中
 * @param view  __esri.SceneView
 * @param point  __esri.Point
 * @param transformation  Float32Array
 * @param matrix4  Matrix4
 * @returns  Matrix4
 */
export function createTransformMatrix4 (
  view: __esri.SceneView,
  point: __esri.Point,
  transformation?: number[] | Float32Array,
  matrix4?: Matrix4,
) {
  point = createEsriPointsSync(view, [point])[0]
  const thisTransformation = transformation ?? new Array(16)
  const thisMatrix4 = matrix4 ?? new Matrix4()


  const coordinateTransformAt = externalRenderers.renderCoordinateTransformAt(
    view,
    [
      point.x ?? point.longitude, 
      point.y ?? point.latitude, 
      point.z ?? 0,
    ],
    view.spatialReference,
    thisTransformation,
  )


  thisMatrix4.fromArray(coordinateTransformAt)

  return thisMatrix4
}



