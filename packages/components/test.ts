import Accessor from '@arcgis/core/core/Accessor'
import { subclass, property } from '@arcgis/core/core/accessorSupport/decorators'

@subclass('vuersi.three.MyLayer')
class MyLayer extends Accessor {
  @property({
    type: String,
  })
    title = 'title'
}
const layer = new MyLayer()
console.log(layer.title)
