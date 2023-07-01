<template>
  <nav :class="$style.nav">
    <h2 :class="$style['nav-title']">{{ title }}</h2>

    <slot></slot>
  </nav>
</template>

<script>
  export default defineComponent({
    name: 'Nav',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  });
</script>

<style lang="scss" module>
  .nav {
    @apply flex flex-col gap-2;

    &-title {
      @apply text-sm;
    }
  }
</style>
