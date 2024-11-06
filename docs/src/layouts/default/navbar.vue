<script lang="ts" setup>
import VpThemeToggler from '#/vitepress/components/navbar/vp-theme-toggler.vue'
const base = import.meta.env.BASE_URL

</script>
<template>
  <div
    sk-flex="row-between-center"
    class="h-full layout-default-navbar"
  >
    <a
      :href="base"
      class="font-600 plr-l ptb-s text-primary"
    >
      @vuesri/three
    </a>
    <VpThemeToggler></VpThemeToggler>
  </div>
</template>

