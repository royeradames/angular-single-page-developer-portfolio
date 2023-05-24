import { SkillPageInterface } from '../model/skill-page.interface';

export function skillPageFacade(skillPageEntry: any): SkillPageInterface[] {
  return skillPageEntry.fields.skills.map((skill: any) => {
    return {
      name: skill.fields.name,
      text: skill.fields.text,
    };
  });
}
