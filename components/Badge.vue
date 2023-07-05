<template>
  <div
    :class="[
      $style.badge,
      $style[`badge-${variant}`],
      $style[`badge-${size}`]
    ]"
    v-bind="attrs"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  type BadgeProps = {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  };

  const {
    variant,
    size
  } = withDefaults(defineProps<BadgeProps>(), {
    variant: 'primary',
    size: 'md'
  });

  const attrs = useAttrs();
</script>

<style lang="scss" module>
  .badge {
    @apply inline-flex items-center justify-center;
    @apply whitespace-nowrap;
    @apply rounded-sm;
    @apply py-1 px-3;

    &-sm {
      @apply text-xs;
    }

    &-md {
      @apply text-sm;
    }
  }
</style>
