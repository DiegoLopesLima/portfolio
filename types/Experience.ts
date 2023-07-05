import { LocationType } from "@/enums/LocationType";
import { EmploymentType } from "@/enums/EmploymentType";

export type Experience<CompanyType> = {
  id: string;
  title: string;
  company: CompanyType;
  startDate: Date;
  endDate?: Date;
  locationType: LocationType;
  employmentType: EmploymentType;
  skills: string[];
};
