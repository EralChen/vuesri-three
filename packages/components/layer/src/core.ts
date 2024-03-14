import { ThreeComponent, ThreeContext } from '@vuesri/three'
import { Deferred } from '@vunk/core/shared/utils-promise'
import { RenderTransform } from '@vuesri-three/components/transform'
import Accessor from '@arcgis/core/core/Accessor'
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators'

/**
 * 像 esri 的 [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#properties-summary) 一样，为 `@vuesri/three` 提供一个 `ThreeLayer` 作为基类
 * 
 */
@subclass('vuesri.three.ThreeLayer')
export class ThreeLayer extends Accessor implements ThreeComponent {
  title?: string
  fullExtent?: __esri.Extent

  @property({
    type: Boolean,
  })
  public visible: boolean = true


  /**
   * setup 方法后注入 RenderTransform
   */
  private renderTransform: RenderTransform
  public getRenderTransform () {
    if (!this.renderTransform) {
      throw new Error('ThreeLayer not setup')
    }
    return this.renderTransform
  }

  /**
   * setup 方法后注入 ThreeContext
   */
  private context: ThreeContext
  public getContext () {
    if (!this.context) {
      throw new Error('ThreeLayer not setup')
    }
    return this.context
  }



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
    this.context = e

  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render (e: ThreeContext): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispose (e: ThreeContext): void {}


  /**
   * 重新执行 setup 方法
   */
  refresh () {
    const ctx = this.getContext()
    this.dispose(ctx)
    this.setup(ctx)
  }

}


