<template>
  <div :class="$style['page-nav']">
    <button
      type="button"
      :class="$style['page-nav-toggle']"
      @click="handleToggle"
    >
      <Icon name="ic:baseline-menu" />

      <span class="sr-only">Toggle menu</span>
    </button>

    <div
      :class="$style['page-nav-content']"
    >
      <Menu />

      <Divider class="lg:hidden" />

      <SocialMedias />
    </div>
  </div>
</template>

<script setup>
  const isNavOpen = useIsNavOpen();

  const handleToggle = () => {
    isNavOpen.value = !isNavOpen.value;
  };
</script>

<style lang="scss" module>
  .page-nav {
    @apply inline-flex flex-col;
    @apply w-full gap-4;

    &-toggle {
      @apply inline-flex;
      @apply w-9 h-9 p-2;
      @apply text-xl;
      @apply lg:hidden;
    }

    &-content {
      @apply flex flex-col gap-4;
      @apply lg:flex-row lg:justify-between;
    }
  }
</style>
