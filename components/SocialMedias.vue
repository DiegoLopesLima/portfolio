<template>
  <Nav title="Social Media">
    <ul :class="$style['social-medias']">
      <li>
        <a
          href="https://www.linkedin.com/in/diegolopeslima/"
          target="_blank"
          rel="noopener noreferrer"
          :class="$style['social-medias-link']"
        >
          <Icon name="fa6-brands:linkedin" />

          LinkedIn
        </a>
      </li>

      <li>
        <a
          href="https://github.com/DiegoLopesLima"
          target="_blank"
          rel="noopener noreferrer"
          :class="$style['social-medias-link']"
        >
          <Icon name="fa6-brands:github" />

          Github
        </a>
      </li>
    </ul>
  </Nav>
</template>

<style lang="scss" module>
  .social-medias {
    @apply flex flex-col gap-1;

    &-link {
      @apply flex items-center;
      @apply gap-2 py-2 px-3;
      @apply hover:bg-zinc-900 hover:bg-opacity-20;
    }
  }
</style>
