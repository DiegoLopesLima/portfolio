<template>
  <div class="flex flex-col gap-4">
    <PageHeader />

    <div :class="$style['section-1']">
      <main class="pt-4">
        <PageContainer>
          <article>
            Main content
          </article>
        </PageContainer>
      </main>
    </div>

    <PageFooter />
  </div>
</template>

<script>
  import '@/assets/scss/global.scss';
</script>

<style lang="scss" module>
  .section-1 {
    @apply pt-14;
    @apply min-h-screen;
    @apply bg-no-repeat bg-center;
    background-image: url('@/assets/images/bg-1.jpg');
    background-size: auto 100%;
  }
</style>
