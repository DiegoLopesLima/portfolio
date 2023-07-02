<template>
  <Nav title="Navigation">
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
      href: "/",
      label: "Home",
    },
    {
      href: "/experience",
      label: "Experience",
    },
    {
      href: "/skills",
      label: "Skills",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]);
</script>
