<script lang="ts" setup>
import VPDocAsideOutline from '#/vitepress/components/VPDocAsideOutline.vue'
import { MenuItem, getHeaders } from '#/vitepress/composables/outline'
import { shallowRef } from 'vue'
import { onContentUpdated } from '#r/page'
const headers = shallowRef<MenuItem[]>([])



onContentUpdated(() => {
  headers.value = getHeaders(2)
}, {
  hooks: ['mounted', 'updated'],
})




</script>
<template>
  <VPDocAsideOutline
    :headers="headers"
  ></VPDocAsideOutline>
</template>
