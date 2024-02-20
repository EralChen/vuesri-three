<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true,
  },
  demo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <component
        :is="demo"
        v-if="demo"
        v-bind="$attrs"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  background-color: var(--bg-color);
  padding: var(--gap-page);
}
</style>
<style>
.example-showcase{
  min-height: 450px;
}
.example-showcase .va-view-x {
  height: 450px;
}
</style>
