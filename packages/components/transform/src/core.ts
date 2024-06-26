import { Matrix4 } from 'three'
import * as Utils from './utils'

export class RenderTransform {
  private transformation = new Array(16) 
  private transform = new Matrix4()  // 变换矩阵



  view: __esri.SceneView

  constructor (view: __esri.SceneView) {
    this.view = view
  }


  createRenderCoordinatesSync (
    points: __esri.Point[],
  ) {
    return Utils.createRenderCoordinatesSync(this.view, points)
  }

  async createEsriPoint (
    points: __esri.PointProperties[],
  ) {
    return Utils.createEsriPoints(this.view, points)
  }

  async createRenderCoordinates (
    points: __esri.PointProperties[],
  ) {
    return Utils.createRenderCoordinates(this.view, points)
  }


  createTransformMatrix4 (
    point: __esri.Point,
  ) {
    return Utils.createTransformMatrix4(
      this.view,
      point,
      this.transformation,
      this.transform,
    )
  }

  getTransform () {
    return this.transform
  }


  


}

