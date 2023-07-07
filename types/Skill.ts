import { SkillLevel } from "@/enums/SkillLevel";

export type Skill = {
  id: string;
  name: string;
  level: SkillLevel;
  description?: string;
};
