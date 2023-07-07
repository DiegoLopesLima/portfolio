import type { Experience } from '@/types/Experience';
import type { Company } from 'types/Company';

import { EmploymentType } from '@/enums/EmploymentType';
import { LocationType } from '@/enums/LocationType';
import { SkillLevel } from '@/enums/SkillLevel';

const experiences: Experience<Company>[] = [
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
      {
        id: '1',
        name: 'Vue',
        level: SkillLevel.Advanced
      },
      {
        id: '2',
        name: 'Next.js',
        level: SkillLevel.Intermediate
      },
      {
        id: '3',
        name: 'React',
        level: SkillLevel.Intermediate
      },
      {
        id: '4',
        name: 'React Hooks',
        level: SkillLevel.Intermediate
      },
      {
        id: '5',
        name: 'HTML5',
        level: SkillLevel.Advanced
      },
      {
        id: '6',
        name: 'CSS3',
        level: SkillLevel.Advanced
      },
      {
        id: '7',
        name: 'SCSS',
        level: SkillLevel.Advanced
      },
      {
        id: '8',
        name: 'CSS Modules',
        level: SkillLevel.Advanced
      },
      {
        id: '9',
        name: 'Tailwind CSS',
        level: SkillLevel.Advanced
      },
      {
        id: '10',
        name: 'JavaScript',
        level: SkillLevel.Advanced
      },
      {
        id: '11',
        name: 'TypeScript',
        level: SkillLevel.Advanced
      },
      {
        id: '12',
        name: 'Websocket',
        level: SkillLevel.Intermediate
      },
      {
        id: '13',
        name: 'Webpack',
        level: SkillLevel.Intermediate
      },
      {
        id: '14',
        name: 'Babel',
        level: SkillLevel.Intermediate
      },
      {
        id: '15',
        name: 'Node.js',
        level: SkillLevel.Intermediate
      },
      {
        id: '16',
        name: 'Express',
        level: SkillLevel.Intermediate
      },
      {
        id: '17',
        name: 'Storybook',
        level: SkillLevel.Advanced
      },
      {
        id: '18',
        name: 'Git',
        level: SkillLevel.Advanced
      },
      {
        id: '19',
        name: 'Scrum',
        level: SkillLevel.Advanced
      },
      {
        id: '20',
        name: 'UX',
        level: SkillLevel.Intermediate
      },
      {
        id: '21',
        name: 'Accessibility',
        level: SkillLevel.Advanced
      },
      {
        id: '22',
        name: 'Responsive Layout',
        level: SkillLevel.Advanced
      },
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
      {
        id: '23',
        name: 'Angular',
        level: SkillLevel.Intermediate
      },
      {
        id: '5',
        name: 'HTML5',
        level: SkillLevel.Advanced
      },
      {
        id: '6',
        name: 'CSS3',
        level: SkillLevel.Advanced
      },
      {
        id: '7',
        name: 'SCSS',
        level: SkillLevel.Advanced
      },
      {
        id: '24',
        name: 'Bootstrap',
        level: SkillLevel.Advanced
      },
      {
        id: '10',
        name: 'JavaScript',
        level: SkillLevel.Advanced
      },
      {
        id: '11',
        name: 'TypeScript',
        level: SkillLevel.Advanced
      },
      {
        id: '25',
        name: 'Jest',
        level: SkillLevel.Intermediate
      },
      {
        id: '18',
        name: 'Git',
        level: SkillLevel.Advanced
      },
      {
        id: '19',
        name: 'Scrum',
        level: SkillLevel.Advanced
      },
      {
        id: '20',
        name: 'UX',
        level: SkillLevel.Intermediate
      },
      {
        id: '21',
        name: 'Accessibility',
        level: SkillLevel.Advanced
      },
      {
        id: '22',
        name: 'Responsive Layout',
        level: SkillLevel.Advanced
      },
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
      {
        id: '26',
        name: 'AngularJS',
        level: SkillLevel.Advanced
      },
      {
        id: '5',
        name: 'HTML5',
        level: SkillLevel.Advanced
      },
      {
        id: '6',
        name: 'CSS3',
        level: SkillLevel.Advanced
      },
      {
        id: '7',
        name: 'SCSS',
        level: SkillLevel.Advanced
      },
      {
        id: '24',
        name: 'Bootstrap',
        level: SkillLevel.Advanced
      },
      {
        id: '10',
        name: 'JavaScript',
        level: SkillLevel.Advanced
      },
      {
        id: '3',
        name: 'React',
        level: SkillLevel.Intermediate
      },
      {
        id: '13',
        name: 'Webpack',
        level: SkillLevel.Intermediate
      },
      {
        id: '14',
        name: 'Babel',
        level: SkillLevel.Intermediate
      },
      {
        id: '18',
        name: 'Git',
        level: SkillLevel.Advanced
      },
      {
        id: '19',
        name: 'Scrum',
        level: SkillLevel.Advanced
      },
      {
        id: '27',
        name: 'SEO',
        level: SkillLevel.Advanced
      },
      {
        id: '20',
        name: 'UX',
        level: SkillLevel.Intermediate
      },
      {
        id: '21',
        name: 'Accessibility',
        level: SkillLevel.Advanced
      },
      {
        id: '22',
        name: 'Responsive Layout',
        level: SkillLevel.Advanced
      },
      {
        id: '28',
        name: 'Technical Leadership',
        level: SkillLevel.Basic
      },
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
      {
        id: '29',
        name: 'jQuery',
        level: SkillLevel.Advanced
      },
      {
        id: '10',
        name: 'JavaScript',
        level: SkillLevel.Advanced
      },
      {
        id: '26',
        name: 'AngularJS',
        level: SkillLevel.Advanced
      },
      {
        id: '5',
        name: 'HTML5',
        level: SkillLevel.Advanced
      },
      {
        id: '6',
        name: 'CSS3',
        level: SkillLevel.Advanced
      },
      {
        id: '24',
        name: 'Bootstrap',
        level: SkillLevel.Advanced
      },
      {
        id: '27',
        name: 'SEO',
        level: SkillLevel.Advanced
      },
      {
        id: '20',
        name: 'UX',
        level: SkillLevel.Intermediate
      },
      {
        id: '21',
        name: 'Accessibility',
        level: SkillLevel.Advanced
      },
      {
        id: '22',
        name: 'Responsive Layout',
        level: SkillLevel.Advanced
      },
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
    locationType: LocationType.OnSite,
    skills: [
      {
        id: '26',
        name: 'AngularJS',
        level: SkillLevel.Advanced
      },
      {
        id: '23',
        name: 'Angular',
        level: SkillLevel.Intermediate
      },
      {
        id: '29',
        name: 'jQuery',
        level: SkillLevel.Advanced
      },
      {
        id: '10',
        name: 'JavaScript',
        level: SkillLevel.Advanced
      },
      {
        id: '5',
        name: 'HTML5',
        level: SkillLevel.Advanced
      },
      {
        id: '6',
        name: 'CSS3',
        level: SkillLevel.Advanced
      },
      {
        id: '7',
        name: 'SCSS',
        level: SkillLevel.Advanced
      },
      {
        id: '30',
        name: 'Less CSS',
        level: SkillLevel.Advanced
      },
      {
        id: '31',
        name: 'PHP',
        level: SkillLevel.Basic
      },
      {
        id: '32',
        name: 'MySQL',
        level: SkillLevel.Basic
      },
      {
        id: '33',
        name: 'Gulp.js',
        level: SkillLevel.Advanced
      },
      {
        id: '34',
        name: 'Grunt',
        level: SkillLevel.Advanced
      },
      {
        id: '18',
        name: 'Git',
        level: SkillLevel.Advanced
      },
      {
        id: '35',
        name: 'Adobe Photoshop',
        level: SkillLevel.Basic
      },
      {
        id: '27',
        name: 'SEO',
        level: SkillLevel.Advanced
      },
      {
        id: '20',
        name: 'UX',
        level: SkillLevel.Intermediate
      },
      {
        id: '21',
        name: 'Accessibility',
        level: SkillLevel.Advanced
      },
      {
        id: '22',
        name: 'Responsive Layout',
        level: SkillLevel.Advanced
      },
    ]
  }
];

export default experiences;
