<template>
  <hr :class="$style.divider" v-bind="props" />
</template>

<script setup>
  const props = defineProps();
</script>

<style lang="scss" module>
  .divider {
    @apply border-t-2 border-white border-opacity-20;
  }
</style>
