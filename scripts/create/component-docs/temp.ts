export const createMd = (t: string, l: string) => `--- 
title: ${t}
lang: zh-CN
---

# ${t}

${t}


## 基础用法

:::demo 
${l}/basic
:::

## ${t} 其他
`

export const createVue = () => `<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VaThreeRenderer } from '@vuesri-three/components/three-renderer'

</script>
<template>
  <VaSceneView>
    <VaTdtBasemap
      :type="'vec_w'"
      :spatial-reference="{
        wkid: 102100,
      }"
    ></VaTdtBasemap>

    <VaThreeRenderer>
   
    </VaThreeRenderer>
  </VaSceneView>
</template>
`