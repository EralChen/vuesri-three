import { union } from '@arcgis/core/geometry/geometryEngine'
import { Group, Object3D } from 'three'
export const extentFromGraphics = (graphics: __esri.Graphic[]) => {
  const geometry = union(graphics.map(g => g.geometry))
  return geometry.extent
}

/**
 * 判断 object 是否是 group 的子或子孙节点
 * @param object 
 * @param group 
 * @returns 
 */
export function isDescendantOfGroup (object: Object3D, group: Group) {
  let parent = object.parent
  while (parent !== null) {
    if (parent === group) {
      return true // 发现 object 是 group 的子或子孙节点
    }
    parent = parent.parent // 继续向上遍历
  }
  return false // 没有找到 group，object 不是其子或子孙节点
}
