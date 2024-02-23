import { ThreeComponent } from '@vuesri-three/shared'
import type { EntityLayer } from './core'

export interface Entity extends ThreeComponent {
  /**
   * 所属图层
   */
  layer: EntityLayer

  /**
   * 数据源基本单元
   */
  graphic: __esri.Graphic

  /**
   * 由单个 graphic 创建的 THREE.Group
   */
  group: THREE.Group
}

export {
  EntityLayer,
}