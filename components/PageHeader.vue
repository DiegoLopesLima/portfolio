<template>
  <header
    :class="[
      $style.header,
      {
        [$style.open]: isNavOpen
      }
    ]"
  >
    <div class="relative z-10">
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
    @apply w-full h-14 py-2;
    @apply transition-all overflow-hidden;
    @apply border-b-2;
    @apply border-white border-opacity-10;

    &::before {
      content: "";
      @apply block w-full h-full;
      @apply absolute top-0 left-0;
      @apply bg-black bg-opacity-40;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }

    &.open {
      @apply h-full;
    }

    &-title {
      @apply sr-only;
    }
  }
</style>
