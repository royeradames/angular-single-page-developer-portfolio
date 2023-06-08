import { SafeHtml } from '@angular/platform-browser';

export interface LinkInterface {
  name: string;
  description: string;
  link: string;
  svg: SafeHtml;
}

export interface SkillPageDataInterface {
  title: string;
  showButtonText: string;
  hideButtonText: string;
  Skills: LinkInterface[];
}
