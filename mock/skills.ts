import type { Skill } from '@/types/Skill';

import { SkillLevel } from '@/enums/SkillLevel';

import companies from '@/mock/companies';

const [
  octadesk,
  db1,
  advise,
  leanwork,
  clickweb
] = companies;

const skills: Skill[] = [
  {
    id: '1',
    name: 'Vue',
    level: SkillLevel.Expert,
    description: 'I have been working with Vue since 2020. I have used it in many projects, including this website.',
    companies: [
      octadesk
    ]
  },
  {
    id: '2',
    name: 'Next.js',
    level: SkillLevel.Intermediate,
    companies: [
      octadesk
    ]
  },
  {
    id: '3',
    name: 'React',
    level: SkillLevel.Advanced,
    companies: [
      octadesk,
      advise
    ]
  },
  {
    id: '4',
    name: 'React Hooks',
    level: SkillLevel.Advanced,
    companies: [
      octadesk,
      advise
    ]
  },
  {
    id: '5',
    name: 'HTML5',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '6',
    name: 'CSS3',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '7',
    name: 'SCSS',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      db1,
      advise,
      clickweb
    ]
  },
  {
    id: '8',
    name: 'CSS Modules',
    level: SkillLevel.Expert,
    companies: [
      octadesk
    ]
  },
  {
    id: '9',
    name: 'Tailwind CSS',
    level: SkillLevel.Expert,
    companies: [
      octadesk
    ]
  },
  {
    id: '10',
    name: 'JavaScript',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '11',
    name: 'TypeScript',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      advise
    ]
  },
  {
    id: '12',
    name: 'Websocket',
    level: SkillLevel.Intermediate,
    companies: [
      octadesk
    ]
  },
  {
    id: '13',
    name: 'Webpack',
    level: SkillLevel.Intermediate,
    companies: [
      octadesk,
      advise
    ]
  },
  {
    id: '14',
    name: 'Babel',
    level: SkillLevel.Intermediate,
    companies: [
      octadesk,
      advise
    ]
  },
  {
    id: '15',
    name: 'Node.js',
    level: SkillLevel.Intermediate,
    companies: [
      octadesk,
      advise
    ]
  },
  {
    id: '16',
    name: 'Express',
    level: SkillLevel.Advanced,
    companies: [
      octadesk
    ]
  },
  {
    id: '17',
    name: 'Storybook',
    level: SkillLevel.Advanced,
    companies: [
      octadesk
    ]
  },
  {
    id: '18',
    name: 'Git',
    level: SkillLevel.Advanced,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '19',
    name: 'Scrum',
    level: SkillLevel.Advanced,
    companies: [
      octadesk,
      db1,
      advise,
      clickweb
    ]
  },
  {
    id: '20',
    name: 'UX',
    level: SkillLevel.Advanced,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '21',
    name: 'Accessibility',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '22',
    name: 'Responsive Layout',
    level: SkillLevel.Expert,
    companies: [
      octadesk,
      db1,
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '23',
    name: 'Angular',
    level: SkillLevel.Intermediate,
    companies: [
      db1,
      advise
    ]
  },
  {
    id: '24',
    name: 'Bootstrap',
    level: SkillLevel.Expert,
    companies: [
      db1,
      advise,
      leanwork
    ]
  },
  {
    id: '25',
    name: 'Jest',
    level: SkillLevel.Intermediate,
    companies: [
      octadesk,
      db1
    ]
  },
  {
    id: '26',
    name: 'AngularJS',
    level: SkillLevel.Advanced,
    companies: [
      octadesk,
      advise,
      leanwork
    ]
  },
  {
    id: '27',
    name: 'SEO',
    level: SkillLevel.Expert,
    companies: [
      leanwork,
      clickweb
    ]
  },
  {
    id: '28',
    name: 'Technical Leadership',
    level: SkillLevel.Basic,
    companies: [
      advise
    ]
  },
  {
    id: '29',
    name: 'jQuery',
    level: SkillLevel.Expert,
    companies: [
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '30',
    name: 'Less CSS',
    level: SkillLevel.Advanced,
    companies: [
      advise
    ]
  },
  {
    id: '31',
    name: 'PHP',
    level: SkillLevel.Basic,
    companies: [
      clickweb
    ]
  },
  {
    id: '32',
    name: 'MySQL',
    level: SkillLevel.Intermediate,
    companies: [
      clickweb
    ]
  },
  {
    id: '33',
    name: 'Gulp.js',
    level: SkillLevel.Advanced,
    companies: [
      advise,
      clickweb
    ]
  },
  {
    id: '34',
    name: 'Grunt',
    level: SkillLevel.Advanced,
    companies: [
      advise,
      clickweb
    ]
  },
  {
    id: '35',
    name: 'Adobe Photoshop',
    level: SkillLevel.Basic,
    companies: [
      advise,
      leanwork,
      clickweb
    ]
  },
  {
    id: '36',
    name: 'Nuxt',
    level: SkillLevel.Advanced,
    companies: []
  },
];

export default skills;
