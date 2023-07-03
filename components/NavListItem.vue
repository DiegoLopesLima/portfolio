<template>
  <li>
    <a
      :href="href"
      :target="target"
      :rel="rel"
      :class="$style['nav-list-link']"
    >
      <Icon v-if="icon" :name="icon" />

      {{ label }}
    </a>
  </li>
</template>

<script lang="ts" setup>
  type NavListItem = {
    icon?: string;
    href: string;
    label: string;
  };

  const props = defineProps<{
    item: NavListItem;
  }>();
  const { item: { value: { icon, href, label } } } = toRefs(props);
  const nuxtApp = useNuxtApp();
  const hostname = process.server ?
    nuxtApp.ssrContext?.event?.node?.req?.headers?.host :
    window.location.hostname;

  let target = ref<"_blank"| undefined>();
  let rel = ref<"noopener noreferrer" | undefined>();

  if (href.startsWith("http")) {
    const parsedUrl = new URL(href);

    if (parsedUrl.hostname !== hostname) {
      target.value = "_blank";
      rel.value = "noopener noreferrer";
    }
  }
</script>

<style lang="scss" module>
  .nav-list-link {
    @apply flex items-center;
    @apply gap-2 py-2 px-3 rounded-sm;
    @apply transition-colors drop-shadow-md;
    @apply hover:bg-white hover:bg-opacity-20;
  }
</style>
