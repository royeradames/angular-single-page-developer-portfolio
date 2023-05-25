import { SkillPageInterface } from '../model/skill-page.interface';
import { DomSanitizer } from '@angular/platform-browser';

export function skillPageFacade(
  skillPageEntry: any,
  sanitizer: DomSanitizer
): SkillPageInterface[] {
  return skillPageEntry.fields.skills.map((skill: any) => {
    return {
      name: skill.fields.name,
      text: skill.fields?.text || '',
      svg: sanitizer.bypassSecurityTrustHtml(skill.fields?.svg || ''),
    };
  });
}
