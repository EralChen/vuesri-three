import { ThreeComponent, ThreeContext } from '@vuesri/three'
import { Deferred } from '@vunk/core/shared/utils-promise'
import { RenderTransform } from '@vuesri-three/components/transform'

/**
 * 像 esri 的 [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#properties-summary) 一样，为 `@vuersi/three` 提供一个 `ThreeLayer` 作为基类
 * 
 */
export class ThreeLayer implements ThreeComponent {
  title?: string
  fullExtent?: __esri.Extent
  visible: boolean = true

  /**
   * setup 方法后注入 RenderTransform
   */
  protected renderTransform: RenderTransform
  protected contextDef = new Deferred<ThreeContext>()


  /* when */
  private whenDef = new Deferred<void>()
  protected ready () {
    return this.whenDef.resolve()
  }
  async when () {
    return this.whenDef.promise
  }
  /* end of when */

  setup (e: ThreeContext): void {
    this.renderTransform = new RenderTransform(e.view)
    this.contextDef.resolve(e)
  }
  render (): void {}
  dispose (): void {}

}


