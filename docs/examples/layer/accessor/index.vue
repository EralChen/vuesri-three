<script lang="ts" setup>
import { ref } from 'vue'
import Accessor from '@arcgis/core/core/Accessor'
import { subclass, property } from '@arcgis/core/core/accessorSupport/decorators'


const data = ref('')

@subclass('vuesri.three.MyLayer1')
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
  console.log('layer.title for vue', layer.title)
})







</script>
<template>
  <div>{{ data }}</div>
</template>
