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
    @apply lg:flex-row;

    @media (min-width: theme('screens.lg')) {
      margin-top: -0.0625rem;
    }

    &-title {
      @apply text-sm;
      @apply drop-shadow-md;
      @apply lg:sr-only;
    }
  }
</style>
