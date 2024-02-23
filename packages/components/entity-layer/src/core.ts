import { ThreeLayer } from '@vuesri-three/components/layer'
import { ThreeContext } from '@vuesri-three/shared'
import type { Entity } from './types'
import { Group } from 'three'


export class EntityLayer extends ThreeLayer {
  public source: __esri.Graphic[]
  public group: THREE.Group = new Group()
  public entities: Entity[] = []
  protected handles: __esri.WatchHandle[] = []
  constructor () {
    super()
    this.group.visible = this.visible
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected init (e: ThreeContext): void {}

  setup (e: ThreeContext): void {
    super.setup(e)

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