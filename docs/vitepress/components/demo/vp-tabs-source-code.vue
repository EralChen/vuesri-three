<script setup lang="ts">
import { PropType, ref } from 'vue'

const props = defineProps({
  data: {
    type: Array as PropType<{
      path: string,
      source: string
    }[]>,
    required: true,
  },
})

const active = ref(props.data[0].path)

</script>

<template>
  <div class="example-source-wrapper">
    <ElTabs
      v-model="active"
      type="border-card"
    >
      <ElTabPane
        v-for="item of data"
        :key="item.path" 
        :name="item.path" 
        :label="item.path"
      >
        <div
          v-html="item.source"
        />
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style>
.example-source-wrapper .el-tabs--border-card>.el-tabs__content {
  padding: 0;
}
.example-source-wrapper  div[class*="language-"] {
  margin: 0;
}

</style>