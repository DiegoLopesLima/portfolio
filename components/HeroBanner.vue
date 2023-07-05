<template>
  <div :class="$style['hero-banner']">
    <PageContainer class="relative flex items-center h-full py-4">
      <div class="grid lg:grid-cols-2 gap-4">
        <article :class="$style['hero-banner-content']">
          <h2 class="text-4xl font-bold">Welcome to my portfolio!</h2>

          <p>Hello! My name is Diego, I am a fullstack developer with emphasis in front-end development since 2011.</p>

          <Button
            class="self-end"
            size="lg"
            variant="on-glass"
          >
            Hire me
          </Button>
        </article>

        <div class="hidden lg:block">
          <img
            src="@/assets/images/profile-picture.png"
            alt="A Diego's picture.'"
            class="absolute bottom-0 right-40"
          />
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<style lang="scss" module>
  .hero-banner {
    @apply pt-12;
    @apply bg-no-repeat bg-cover bg-center;
    @apply bg-black;
    height: 32rem;
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

    &-content {
      @apply flex flex-col gap-4;
      @apply bg-black bg-opacity-10 backdrop-blur-md;
      @apply p-8;
      @apply border-2 border-white border-opacity-5 rounded-xl;
    }
  }
</style>
