<template>
  <div class="flex flex-col gap-4">
    <PageHeader />

    <div :class="$style['hero-banner']">
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
  .hero-banner {
    @apply pt-14;
    @apply h-96;
    @apply bg-no-repeat bg-cover bg-center;
    @apply bg-black;
    background-image: url('@/assets/images/bg-hero-banner-xs.jpg');

    @media (min-width: theme('screens.sm')) {
      background-image: url('@/assets/images/bg-hero-banner-sm.jpg');
    }

    @media (min-width: theme('screens.md')) {
      background-image: url('@/assets/images/bg-hero-banner-md.jpg');
    }

    @media (min-width: theme('screens.lg')) {
      background-image: url('@/assets/images/bg-hero-banner-lg.jpg');
    }

    @media (min-width: theme('screens.xl')) {
      background-image: url('@/assets/images/bg-hero-banner-xl.jpg');
    }

    @media (min-width: theme('screens.2xl')) {
      background-image: url('@/assets/images/bg-hero-banner-2xl.jpg');
    }
  }
</style>
