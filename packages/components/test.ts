import Accessor from '@arcgis/core/core/Accessor'
import { subclass, property } from '@arcgis/core/core/accessorSupport/decorators'

@subclass('vuersi.three.MyLayer')
export class MyLayer1 extends Accessor {
  @property({
    type: String,
  })
    title = 'title'
}
const layer1 = new MyLayer1()


setInterval(() => {
  layer1.title = 'title' + Math.random()
}, 1000)

layer1.watch('title', (value) => {

  console.log('title changed for test', value)
})

console.log(layer1.watch)

