<template>
  <component :is="layout">
    <RouterView></RouterView>
  </component>
</template>

<script lang="ts" setup>


import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Empty from '@/layouts/Empty.vue'
import Default from '@/layouts/Default.vue'

const route = useRoute()

const layout = computed(() => (route.meta?.layout == 'empty' ? Empty : Default))

</script>

<style lang="scss" scoped></style>