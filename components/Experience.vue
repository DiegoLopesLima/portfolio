<template>
  <div :class="$style.experience">
    <div :class="$style['experience-resume']">
      <img
        :src="company.image"
        :alt="`${company.name}'s logo.'`"
        class="rounded-md"
      />

      <div :class="$style['experience-resume-description']">
        <header :class="$style['experience-resume-header']">
          <span :class="$style['experience-resume-title']">
            {{ title }}
          </span>

          <small :class="$style['experience-resume-type']">
            ({{ employmentTypeMap[employmentType] }}, {{ locationTypeMap[locationType] }})
          </small>
        </header>

        <div :class="$style['experience-resume-company']">
          {{ company.name }}
        </div>

        <a
          :href="company.href"
          target="_blank"
          rel="noopener noreferrer nofollow"
          :class="$style['experience-resume-company-link']"
        >
          {{ formatedCompanyURL }}

          <Icon name="ic:baseline-open-in-new" />
        </a>

        <div :class="$style['experience-resume-duration']">
          <time
            :datetime="startDate.toString()"
          >{{ formatedStartDate }}</time> -

          <time>{{ formatedEndDate }}</time>

          ({{ formatedDuration }})
        </div>
      </div>
    </div>

    <div :class="$style['experience-section']">
      <div :class="$style['experience-title']">Main skills:</div>

      <div class="flex gap-1 flex-wrap">
        <Badge
          v-for="skill in skills"
          :key="skill.id"
          size="sm"
          class="bg-white bg-opacity-20"
        >{{ skill.name }}</Badge>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { format, differenceInMonths, parseISO } from 'date-fns';

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
  const { item } = defineProps<ExperienceProps>();
  const {
    title,
    company,
    startDate,
    endDate,
    locationType,
    employmentType,
    skills
  } = toRefs(item);

  const formatedStartDate = ref(format(parseISO(startDate.value), 'MMM yyyy'));
  const formatedEndDate = ref(endDate?.value ? format(parseISO(endDate.value), 'MMM yyyy') : 'Present');
  const durationInMonths = differenceInMonths(parseISO(endDate?.value ?? new Date().toISOString()), parseISO(startDate.value));
  const durationInYears = Math.floor(durationInMonths / 12);
  const durationRemainder = durationInMonths % 12;
  const formatedCompanyURL = ref(company.value.href.replace(/^https?:\/\/|\/$/g, ''))

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
    @apply bg-white bg-opacity-10;
    @apply text-white text-opacity-90;

    &-resume {
      @apply flex items-start lg:items-center gap-2;

      &-description {
        @apply flex flex-col gap-1;
      }

      &-header {
        @apply flex flex-col items-start;
        @apply lg:flex-row lg:gap-2 lg:items-center;
      }

      &-title {
        @apply flex;
        @apply font-semibold text-opacity-100;
      }

      &-type {
        @apply flex justify-start;
        @apply text-xs;
      }

      &-company {
        @apply text-sm;

        &-link {
          @apply inline-flex w-min items-center gap-1;
          @apply text-sm;
        }
      }

      &-duration {
        @apply text-xs;
      }
    }

    &-section {
      @apply flex flex-col gap-1;
    }

    &-title {
      @apply text-sm font-semibold;
    }
  }
</style>
