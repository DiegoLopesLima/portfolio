<template>
  <Nav title="Social Media">
    <NavList>
      <NavListItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </NavList>
  </Nav>
</template>

<script setup>
  const items = reactive([
    {
      icon: "fa6-brands:linkedin",
      href: "https://www.linkedin.com/in/diegolopeslima/",
      label: "LinkedIn",
    },
    {
      icon: "fa6-brands:github",
      href: "https://github.com/DiegoLopesLima",
      label: "Github",
    },
  ]);
</script>
