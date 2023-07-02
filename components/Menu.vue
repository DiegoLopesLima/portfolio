<template>
  <Nav title="Navigation">
    <ul :class="$style.menu">
      <li>
        <a href="" :class="$style['menu-link']">Home (Current)</a>
      </li>

      <li>
        <a href="" :class="$style['menu-link']">Experience</a>
      </li>

      <li>
        <a href="" :class="$style['menu-link']">Skills</a>
      </li>

      <li>
        <a href="" :class="$style['menu-link']">Blog</a>
      </li>

      <li>
        <a href="" :class="$style['menu-link']">Contact</a>
      </li>
    </ul>
  </Nav>
</template>

<style lang="scss" module>
  .menu {
    @apply flex flex-col gap-1;

    &-link {
      @apply flex items-center;
      @apply gap-2 py-2 px-3 rounded-sm;
      @apply transition-colors;
      @apply hover:bg-zinc-900 hover:bg-opacity-20;
    }
  }
</style>
