import type { Skill } from "@/types/Skill";

import { LocationType } from "@/enums/LocationType";
import { EmploymentType } from "@/enums/EmploymentType";

export type Experience<CompanyType> = {
  id: string;
  title: string;
  company: CompanyType;
  startDate: string;
  endDate?: string;
  locationType: LocationType;
  employmentType: EmploymentType;
  skills: Skill[];
};
