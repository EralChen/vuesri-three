import { ThreeLayer, extentFromGraphics } from '@vuesri-three/components/layer'
import { ThreeContext } from '@vuesri-three/shared'
import type { Entity, EntityLayerProperties } from './types'
import { Group } from 'three'


export class EntityLayer extends ThreeLayer {
  public source: __esri.Graphic[]
  public group: Group = new Group()
  public entities: Entity[] = []
  declare public fullExtent: __esri.Extent
  protected handles: __esri.WatchHandle[] = []
  constructor (e: EntityLayerProperties = {}) {
    super()
    e.source && (this.source = e.source)
    this.group.visible = this.visible
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected init (e: ThreeContext): void {}

  setup (e: ThreeContext): void {
    super.setup(e)
    this.fullExtent = extentFromGraphics(this.source)
    
    this.init(e)

    this.entities.forEach(entity => {
      entity.setup(e)
    })

    e.scene.add(this.group)

    this.handles.push(
      this.watch('visible', (v) => {
        this.group.visible = v
      }),
    )

    this.ready()
  }

  render (e: ThreeContext): void {
    this.entities.forEach(entity => {
      entity.render(e)
    })
  }

  dispose (e: ThreeContext): void {
    this.handles.forEach(h => h.remove())
    this.handles.length = 0
    this.entities.forEach(entity => {
      entity.dispose(e)
    })
  }


}