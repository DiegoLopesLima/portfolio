<template>
  <PageSection
    title="Experience"
    class="shadow-inner shadow-black"
  >
    <div class="grid lg:grid-cols-2 gap-4">
      <Experience
        v-for="experience in experiences"
        :key="experience.id"
        :item="experience"
      />
    </div>
  </PageSection>
</template>

<script lang="ts" setup>
  import type { Experience } from '@/types/Experience';
  import type { Company } from '@/types/Company';

  const { data: experiences } = await useFetch<Experience<Company>[]>('/api/experiences');
</script>
