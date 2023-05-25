import { LinkInterface } from './link.interface';
import { SafeHtml } from '@angular/platform-browser';

export interface SocialLinksInterface {
  name: string;
  logo: SafeHtml;
  nameLink: string;
  socialMedias: LinkInterface[];
}
