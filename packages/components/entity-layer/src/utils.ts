import { Polygon } from 'esri/geometry'

/**
 * 从 geometry 中获取 路径（Point[]） 数组
 * @param unknowGeometry 
 * @returns 
 */
export const pathsFromGeometry = (
  unknowGeometry: __esri.Geometry,
): __esri.Point[][] => {
  switch (unknowGeometry.type) {
    
  case 'point':
    const point = unknowGeometry as __esri.Point
    return [
      [ point ],
    ]
  case 'polyline':
    const polyline = unknowGeometry as __esri.Polyline
    return polyline.paths.map((path, i) => {
      return path.map((_, j) => {
        return polyline.getPoint(i, j)
      })
    })

  case 'polygon':
    const polygon = unknowGeometry as __esri.Polygon
    return polygon.rings.map((ring, i) => {
      return ring.map((_, j) => {
        return polygon.getPoint(i, j)
      })
    })

  case 'multipoint':
    const multipoint = unknowGeometry as __esri.Multipoint
    return [
      multipoint.points.map((_, i) => multipoint.getPoint(i)),
    ]
  
  case 'extent':
    const extent = unknowGeometry as __esri.Extent
    const extentPolygon = Polygon.fromExtent(extent) 
    return pathsFromGeometry(extentPolygon)

  case 'mesh': 
    throw new Error('mesh geometry is not supported')

  default:
    throw new Error('geometry type is not supported')

  }
}

/**
 * 如果是非闭合的多边形，则返回闭合的 clone 对象
 * 否则返回本身的 clone 对象
 * @param geometry 
 * @returns 
 */
export const closedGeometry = (
  geometry: __esri.Geometry,
): __esri.Geometry => {
  switch (geometry.type) {
  case 'polygon':
    const polygon = geometry.clone() as __esri.Polygon
    polygon.rings.forEach((ring, index) => {
      if (
        ring[0][0] !== ring[ring.length - 1][0] 
        || ring[0][1] !== ring[ring.length - 1][1]
      ) {
        polygon.insertPoint(index, ring.length, ring[0])
      }
    })
    return polygon
  case 'extent':
    const extentPolygon = Polygon.fromExtent(
      geometry as __esri.Extent,
    )
    return closedGeometry(extentPolygon)

  default:
    return geometry.clone() 
  }


}
