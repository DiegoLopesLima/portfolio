<template>
  <section :class="$style['page-section']" v-bind="attrs">
    <PageContainer>
      <h2 :class="$style['page-section-title']">{{ title }}</h2>

      <slot></slot>
    </PageContainer>
  </section>
</template>

<script lang="ts" setup>
  type PageSectionProps = {
    title: string;
  };

  const { title } = defineProps<PageSectionProps>();
  const attrs = useAttrs();
</script>

<style lang="scss" module>
  .page-section {
    @apply flex flex-col justify-center;
    @apply min-h-screen;
    @apply py-8;

    &-title {
      @apply text-2xl font-semibold;
      @apply mb-4;
    }
  }
</style>
