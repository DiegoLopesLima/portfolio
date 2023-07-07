<template>
  <button
    :type="type"
    :class="[
      $style.button,
      $style[`button-${size}`],
      $style[`button-${variant}`]
    ]"
    v-bind="attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'on-glass';
  };

  const {
    type,
    size,
    variant
  } = withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
    size: 'md',
    variant: 'primary'
  });
  const attrs = useAttrs();
</script>

<style lang="scss" module>
  .button {
    @apply inline-flex items-center justify-center;
    @apply w-min;
    @apply whitespace-nowrap;
    @apply transition-colors;

    &-sm {
      @apply py-1.5 px-3;
      @apply rounded-md;
      @apply text-sm;
    }

    &-md {
      @apply py-2 px-4;
      @apply rounded-md;
    }

    &-lg {
      @apply py-3 px-6;
      @apply rounded-lg;
      @apply text-lg;
    }

    &-primary {
      @apply text-white;
      @apply bg-blue-600;
      @apply hover:bg-blue-700;
    }

    &-on-glass {
      @apply text-white;
      @apply bg-black bg-opacity-10;
      @apply border-2 border-white border-opacity-50;
      @apply hover:bg-opacity-30;
    }
  }
</style>
