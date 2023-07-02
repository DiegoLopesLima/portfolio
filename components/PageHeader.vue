<template>
  <header
    :class="[
      $style.header,
      {
        [$style.open]: isNavOpen
      }
    ]"
  >
    <PageContainer>
      <h1 :class="$style['header-title']">Diego Lopes Lima's Portfolio</h1>

      <PageNav />
    </PageContainer>
  </header>
</template>

<script setup>
  const isNavOpen = useIsNavOpen();
</script>

<style lang="scss" module>
  .header {
    @apply fixed top-0 left-0;
    @apply w-full h-14 py-2 border-b-4;
    @apply transition-all overflow-hidden;
    @apply bg-green-500 border-green-700;

    &.open {
      @apply h-full;
    }

    &-title {
      @apply sr-only;
    }
  }
</style>
