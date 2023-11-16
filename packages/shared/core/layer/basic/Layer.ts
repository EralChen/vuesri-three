import { ThreeLayerContext } from '@vuesri/three'
import { Matrix4, Quaternion, Vector3 } from 'three'
import { Deferred } from '@vunk/core/shared/utils-promise'
import { externalRenderers } from '@vuesri/core/arcgis'

import { createRenderCoordinates, genEsriPoints } from '@vuesri-three/shared/utils'


export class Layer  {

  transformation = new Array(16) 

  transform = new Matrix4()  // 变换矩阵

  title: string
 
  contextDef = new Deferred<ThreeLayerContext>()

  protected whenDef = new Deferred<void>()


  async when () {
    return this.whenDef.promise
  }

  setup (e: ThreeLayerContext): void {
    this.contextDef.resolve(e)
  }

  async genEsriPoints (ps: __esri.PointProperties[]) {
    const e = await this.contextDef.promise
    return genEsriPoints(e.view, ps)
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

    return createRenderCoordinates(
      e.view,
      ps,
    )
  }
}

