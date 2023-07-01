<template>
  <header :class="$style.header">
    <PageContainer>
      <h1 :class="$style['header-title']">Diego Lopes Lima's Portfolio</h1>

      <PageNav />
    </PageContainer>
  </header>
</template>

<style lang="scss" module>
  .header {
    @apply fixed top-0 left-0;
    @apply w-full py-4 border-b-4;
    @apply bg-green-500 border-green-700;

    &-title {
      @apply sr-only;
    }
  }
</style>
