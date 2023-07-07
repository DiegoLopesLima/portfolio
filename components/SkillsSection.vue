<template>
  <PageSection
    title="Skills"
    class="bg-cyan-800"
  >
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skill
        v-for="skill in skills"
        :key="skill.id"
        :item="skill"
      />
    </div>
  </PageSection>
</template>

<script lang="ts" setup>
  const { data: skills } = await useFetch('/api/skills');
</script>
