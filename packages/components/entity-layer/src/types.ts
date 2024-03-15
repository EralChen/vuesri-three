import { ThreeComponent } from '@vuesri-three/shared'
import type { EntityLayer } from '@vuesri-three/components/entity-layer'
import { Group } from 'three'

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
  group: Group
}

export interface EntityLayerProperties {
  source?: __esri.Graphic[]
}

export {
  EntityLayer,
}