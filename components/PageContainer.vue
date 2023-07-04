<template>
  <div :class="$style['page-container']">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
  .page-container {
    @apply container mx-auto px-4;
    @apply transition-all;
  }
</style>
