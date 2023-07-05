<template>
  <div
    :class="[
      $style.badge,
      $style[`badge-${variant}`],
      $style[`badge-${size}`]
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  type BadgeProps = {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  };

  const props = withDefaults(defineProps<BadgeProps>(), {
    variant: 'primary',
    size: 'md'
  });
</script>

<style lang="scss" module>
  .badge {
    @apply inline-flex items-center justify-center;
    @apply whitespace-nowrap;
    @apply rounded-full;
    @apply py-1 px-3;

    &-sm {
      @apply text-xs;
    }

    &-md {
      @apply text-sm;
    }

    &-primary {
      @apply bg-blue-500;
      @apply text-white;
    }
  }
</style>
