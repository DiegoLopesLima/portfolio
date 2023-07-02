<template>
  <nav :class="$style.nav">
    <h2 :class="$style['nav-title']">{{ title }}</h2>

    <slot></slot>
  </nav>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" module>
  .nav {
    @apply flex flex-col gap-2;

    &-title {
      @apply text-sm;
      @apply drop-shadow-md;
    }
  }
</style>
