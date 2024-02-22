import { union } from '@arcgis/core/geometry/geometryEngine'
export const extentFromGraphics = (graphics: __esri.Graphic[]) => {
  const geometry = union(graphics.map(g => g.geometry))

  return geometry.extent
}