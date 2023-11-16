import * as geometryService from '@arcgis/core/rest/geometryService'
import ProjectParameters from '@arcgis/core/rest/support/ProjectParameters'
import { Point, esriConfig, externalRenderers } from '@vuesri/core/arcgis'

export async function genEsriPoints (
  view: __esri.SceneView,
  ps: __esri.PointProperties[],
) {
  
  const points = new Array<__esri.Point>(ps.length)
  let serverPoints = new Array<__esri.PointProperties>(ps.length)

  ps.forEach((pointProperties, i) => {
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

export async function createRenderCoordinates (
  view: __esri.SceneView,
  ps: __esri.PointProperties[],
) {
  await view.when()

  const points = await genEsriPoints(view, ps)

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



