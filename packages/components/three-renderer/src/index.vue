<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VaThreeRenderer',
  emits,
  props,
  setup (props, { emit }) {
    return {}
  },
})
</script>
<template>
  <div>ThreeRenderer</div>
</template>
