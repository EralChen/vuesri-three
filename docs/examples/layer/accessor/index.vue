<script lang="ts" setup>
import { ref } from 'vue'
import Accessor from '@arcgis/core/core/Accessor'
import { subclass, property } from '@arcgis/core/core/accessorSupport/decorators'
// import '@vuesri-three/components/test'


const data = ref('')

@subclass('vuersi.three.MyLayer')
class MyLayer extends Accessor {
  @property({
    type: String,
  })
    title = 'title'
}
const layer = new MyLayer()


setInterval(() => {
  layer.title = 'title' + Math.random()
}, 1000)

layer.watch('title', (value) => {
  data.value = value
})


</script>
<template>
  <div>{{ data }}</div>
</template>
