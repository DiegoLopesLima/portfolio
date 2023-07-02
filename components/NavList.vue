<template>
  <ul :class="$style['nav-list']">
    <slot></slot>
  </ul>
</template>

<style lang="scss" module>
  .nav-list {
    @apply flex flex-col gap-1;
  }
</style>
