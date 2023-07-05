<template>
  <article
    class="min-h-screen bg-indigo-700 shadow-inner shadow-indigo-950 py-4 flex items-center"
  >
    <PageContainer>
      <h2 class="text-xl font-bold mb-4">Experience</h2>

      <div class="grid lg:grid-cols-2 gap-4">
        <Experience
          v-for="experience in experiences"
          :key="experience.id"
          :item="experience"
        />
      </div>
    </PageContainer>
  </article>
</template>

<script lang="ts" setup>
  import type { Experience } from '@/types/Experience';
  import type { Company } from '@/types/Company';
  import { EmploymentType } from '@/enums/EmploymentType';
  import { LocationType } from '@/enums/LocationType';

  const experiences = reactive<Experience<Company>[]>([
    {
      id: '1',
      company: {
        id: '1',
        name: 'Octadesk',
        image: '/images/octadesk.jpeg',
        href: 'https://www.octadesk.com/'
      },
      title: 'Senior Frontend Engineer',
      employmentType: EmploymentType.FullTime,
      startDate: new Date(2020, 1, 14),
      locationType: LocationType.Remote,
      skills: [
        'Vue',
        'Next.js',
        'React',
        'React Hooks',
        'HTML5',
        'CSS3',
        'SCSS',
        'CSS Modules',
        'Tailwind CSS',
        'JavaScript',
        'TypeScript',
        'Webpack',
        'Babel',
        'Node.js',
        'Express',
        'Storybook',
        'Git',
        'Scrum',
        'UX',
        'Accessibility',
        'Responsive Layout',
      ]
    },
    {
      id: '2',
      company: {
        id: '2',
        name: 'DB1 Global Software',
        image: '/images/db1.jpeg',
        href: 'https://www.db1.com.br/'
      },
      title: 'Senior Frontend Engineer',
      employmentType: EmploymentType.FullTime,
      startDate: new Date(2019, 0, 1),
      endDate: new Date(2020, 1, 1),
      locationType: LocationType.Remote,
      skills: [
        'Angular',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'JavaScript',
        'TypeScript',
        'Jest',
        'Git',
        'Scrum',
        'UX',
        'Accessibility',
        'Responsive Layout',
      ]
    },
    {
      id: '3',
      company: {
        id: '3',
        name: 'Advise',
        image: '/images/advise.jpeg',
        href: 'https://advise.com.br/'
      },
      title: 'Senior Frontend Engineer',
      employmentType: EmploymentType.FullTime,
      startDate: new Date(2016, 5, 1),
      endDate: new Date(2018, 11, 1),
      locationType: LocationType.OnSite,
      skills: [
        'AngularJS',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'JavaScript',
        'React',
        'Webpack',
        'Babel',
        'Git',
        'Scrum',
        'SEO',
        'UX',
        'Accessibility',
        'Responsive Layout',
        'Technical Leadership',
      ]
    },
    {
      id: '4',
      company: {
        id: '4',
        name: 'Leanwork',
        image: '/images/leanwork.jpeg',
        href: 'https://www.leanwork.com.br/'
      },
      title: 'Pleno Frontend Engineer',
      employmentType: EmploymentType.Freelance,
      startDate: new Date(2014, 0, 1),
      endDate: new Date(2016, 0, 1),
      locationType: LocationType.Remote,
      skills: [
        'jQuery',
        'JavaScript',
        'AngularJS',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'SEO',
        'UX',
        'Accessibility',
        'Responsive Layout',
      ]
    },
    {
      id: '5',
      company: {
        id: '5',
        name: 'Clickweb',
        image: '/images/clickweb.jpeg',
        href: 'https://clickweb.com.br/'
      },
      title: 'Pleno Frontend Engineer',
      employmentType: EmploymentType.Freelance,
      startDate: new Date(2011, 4, 1),
      endDate: new Date(2014, 4, 1),
      locationType: LocationType.Remote,
      skills: [
        'AngularJS',
        'Angular',
        'jQuery',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Less CSS',
        'PHP',
        'MySQL',
        'Gulp.js',
        'Grunt',
        'Git',
        'Adobe Photoshop',
        'SEO',
        'UX',
        'Accessibility',
        'Responsive Layout',
      ]
    }
  ]);
</script>
