<template>
  <div class="flex flex-col gap-2 p-4 rounded-md bg-black bg-opacity-30">
    <div class="flex items-center justify-between gap-4">
      <Badge class="bg-zinc-500">{{ name }}</Badge>

      <div class="flex items-center gap-2">
        <div class="text-sm">{{ skillLevelMap[level] }}</div>

        <div class="flex gap-1">
          <Icon
            v-for="i in skillLevelStarMap[level]"
            name="ic:outline-star"
            class="text-amber-500"
          />

          <Icon
            v-for="i in 4 - skillLevelStarMap[level]"
            name="ic:outline-star-border"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-1">
      <div
        v-for="company in companies"
        :key="company.id"
        class="flex items-center gap-2"
      >
        <img
          :src="company.image"
          :alt="`${company.name}'s logo.`"
          width="28"
          height="28"
          class="rounded-sm"
        />
      </div>
    </div>

    <div v-if="description">{{ description }}</div>
  </div>
</template>

<script lang="ts" setup>
  import type { Skill } from '@/types/Skill';
  import { SkillLevel } from '@/enums/SkillLevel';

  const skillLevelMap = {
    [SkillLevel.Basic]: 'Basic',
    [SkillLevel.Intermediate]: 'Intermediate',
    [SkillLevel.Advanced]: 'Advanced',
    [SkillLevel.Expert]: 'Expert',
  };

  const skillLevelStarMap = {
    [SkillLevel.Basic]: 1,
    [SkillLevel.Intermediate]: 2,
    [SkillLevel.Advanced]: 3,
    [SkillLevel.Expert]: 4,
  };

  type SkillProps = {
    item: Skill
  };

  const { item } = defineProps<SkillProps>();
  const {
    name,
    level,
    description,
    companies
  } = toRefs(item);
</script>
