---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 @vuesri/three。

## 用法

### 单组件引入

```typescript
// main.ts
import '@vunk/core/index.css'

```

```vue
<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VaThreeRenderer } from '@vuesri/three'
import CustomLayer from './custom-layer.vue'


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
      <CustomLayer></CustomLayer>
    </VaThreeRenderer>
  </VaSceneView>
</template>

```



## 开始使用

您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。
