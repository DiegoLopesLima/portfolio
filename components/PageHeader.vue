<template>
  <header
    :class="[
      $style.header,
      {
        [$style.open]: isNavOpen
      }
    ]"
  >
    <div :class="$style['header-content']">
      <PageContainer>
        <h1 :class="$style['header-title']">Diego Lopes Lima's Portfolio</h1>

        <PageNav />
      </PageContainer>
    </div>
  </header>
</template>

<script setup>
  const isNavOpen = useIsNavOpen();
</script>

<style lang="scss" module>
  .header {
    @apply fixed top-0 left-0 z-10;
    @apply w-full h-12 py-1;
    @apply transition-all overflow-hidden;
    @apply border-b-2;
    @apply border-white border-opacity-20;

    &::before {
      content: "";
      @apply block w-full h-full;
      @apply absolute top-0 left-0;
      @apply bg-black bg-opacity-30 backdrop-blur-md;
    }

    &-content {
      @apply relative z-10;
    }

    &.open {
      @apply h-full;
    }

    &-title {
      @apply sr-only;
    }
  }
</style>
