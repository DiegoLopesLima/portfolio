import type { Experience } from '@/types/Experience';
import type { Company } from 'types/Company';

import { EmploymentType } from '@/enums/EmploymentType';
import { LocationType } from '@/enums/LocationType';
import { SkillLevel } from '@/enums/SkillLevel';

import companies from '@/mock/companies';
import skills from '@/mock/skills';

const [
  octadesk,
  db1,
  advise,
  leanwork,
  clickweb
] = companies;

const experiences: Experience<Company>[] = [
  {
    id: '1',
    company: octadesk,
    title: 'Senior Frontend Engineer',
    employmentType: EmploymentType.FullTime,
    startDate: new Date(2020, 1, 14).toISOString(),
    locationType: LocationType.Remote,
    skills: skills.filter(skill => skill.companies?.includes(octadesk))
  },
  {
    id: '2',
    company: db1,
    title: 'Senior Frontend Engineer',
    employmentType: EmploymentType.FullTime,
    startDate: new Date(2019, 0, 1).toISOString(),
    endDate: new Date(2020, 1, 1).toISOString(),
    locationType: LocationType.Remote,
    skills: skills.filter(skill => skill.companies?.includes(db1))
  },
  {
    id: '3',
    company: advise,
    title: 'Senior Frontend Engineer',
    employmentType: EmploymentType.FullTime,
    startDate: new Date(2016, 5, 1).toISOString(),
    endDate: new Date(2018, 11, 1).toISOString(),
    locationType: LocationType.OnSite,
    skills: skills.filter(skill => skill.companies?.includes(advise))
  },
  {
    id: '4',
    company: leanwork,
    title: 'Pleno Frontend Engineer',
    employmentType: EmploymentType.Freelance,
    startDate: new Date(2014, 0, 1).toISOString(),
    endDate: new Date(2016, 0, 1).toISOString(),
    locationType: LocationType.Remote,
    skills: skills.filter(skill => skill.companies?.includes(leanwork))
  },
  {
    id: '5',
    company: clickweb,
    title: 'Pleno Frontend Engineer',
    employmentType: EmploymentType.Freelance,
    startDate: new Date(2011, 4, 1).toISOString(),
    endDate: new Date(2014, 4, 1).toISOString(),
    locationType: LocationType.OnSite,
    skills: skills.filter(skill => skill.companies?.includes(clickweb))
  }
];

export default experiences;
