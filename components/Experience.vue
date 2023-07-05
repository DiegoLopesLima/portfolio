<template>
  <div :class="$style.experience">
    <div class="flex gap-2 items-center">
      <img
        :src="company.image"
        :alt="`${company.name}'s logo.'`"
        class="rounded-md"
      />

      <div>
        <div class="flex gap-2 text-lg">
          <span class="font-bold">{{ title }}</span>

          <small>({{ employmentTypeMap[employmentType] }}, {{ locationTypeMap[locationType] }})</small>
        </div>

        <div>{{ company.name }}</div>

        <a
          :href="company.href"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >{{ company.href }}</a>

        <div>
          <time
            :datetime="startDate.toString()"
          >{{ formatedStartDate }}</time> -

          <time>{{ formatedEndDate }}</time>

          ({{ formatedDuration }})
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <div>Main skills:</div>

      <div class="flex gap-1 flex-wrap">
        <Badge
          v-for="skill in skills"
          :key="skill"
        >{{ skill }}</Badge>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { format, differenceInMonths } from 'date-fns';

  import type { Experience } from '@/types/Experience';
  import type { Company } from '@/types/Company';
  import { LocationType } from '@/enums/LocationType';
  import { EmploymentType } from '@/enums/EmploymentType';

  type ExperienceProps = {
    item: Experience<Company>;
  };

  const locationTypeMap = {
    [LocationType.Remote]: 'Remote',
    [LocationType.OnSite]: 'On site',
    [LocationType.Hybrid]: 'Hybrid'
  };
  const employmentTypeMap = {
    [EmploymentType.FullTime]: 'Full time',
    [EmploymentType.PartTime]: 'Part time',
    [EmploymentType.Freelance]: 'Freelance',
  };
  const props = defineProps<ExperienceProps>();
  const {
    item: {
      value: {
        title,
        company,
        startDate,
        endDate,
        locationType,
        employmentType,
        skills
      }
    }
  } = toRefs(props);
  const formatedStartDate = ref(format(startDate, 'MMM yyyy'));
  const formatedEndDate = ref(endDate ? format(endDate, 'MMM yyyy') : 'Present');
  const durationInMonths = differenceInMonths(endDate ?? new Date(), startDate);
  const durationInYears = Math.floor(durationInMonths / 12);
  const durationRemainder = durationInMonths % 12;

  let formatedDuration = ref(`${durationInYears} years`);

  if (durationRemainder > 0) {
    formatedDuration.value += ` ${durationRemainder} months`
  }
</script>

<style lang="scss" module>
  .experience {
    @apply inline-flex flex-col gap-1;
    @apply p-4;
    @apply rounded-md;
    @apply shadow-inner;
    @apply bg-white bg-opacity-10;
  }
</style>
