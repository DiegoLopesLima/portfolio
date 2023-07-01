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
      :class="[
        $style['page-nav-content'],
        {
          [$style.open]: open
        }
      ]"
    >
      <Menu />

      <hr />

      <SocialMedias />
    </div>
  </div>
</template>

<script setup>
  let open = ref(false);

  const handleToggle = () => {
    open.value = !open.value;
  };
</script>

<style lang="scss" module>
  .page-nav {
    @apply inline-flex flex-col gap-2;

    &-toggle {
      @apply inline-flex;
      @apply w-9 h-9 p-2;
      @apply text-xl;
    }

    &-content {
      @apply hidden flex-col gap-4;

      &.open {
        @apply flex;
      }
    }
  }
</style>
