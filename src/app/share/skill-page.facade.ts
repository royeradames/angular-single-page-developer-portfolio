import { SkillPageDataInterface } from '../model/link.interface';
import { DomSanitizer } from '@angular/platform-browser';

export function skillPageFacade(
  skillPageEntry: any,
  sanitizer: DomSanitizer
): SkillPageDataInterface {
  return {
    Skills: skillPageEntry.fields.skills.map((skill: any) => {
      return {
        name: skill.fields.name,
        link: skill.fields.link,
        svg: sanitizer.bypassSecurityTrustHtml(skill.fields.svg),
      };
    }),
    hideButtonText: skillPageEntry.fields.hideButtonText,
    showButtonText: skillPageEntry.fields.showButtonText,
    title: skillPageEntry.fields.title,
  };
}
