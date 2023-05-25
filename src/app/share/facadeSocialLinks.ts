import { SocialLinksInterface } from '../model/social-links.interface';
import { DomSanitizer } from '@angular/platform-browser';

export function facadeSocialLinks(
  socialLinksEntry: any,
  sanitizer: DomSanitizer
): SocialLinksInterface {
  return {
    logo: sanitizer.bypassSecurityTrustHtml(socialLinksEntry.fields.logo),
    name: socialLinksEntry.fields.name,
    nameLink: socialLinksEntry.fields.nameLink,
    socialMedias: socialLinksEntry.fields.socialMedias.map(
      (socialMedia: any) => {
        return {
          name: socialMedia.fields.name,
          link: socialMedia.fields.link,
          svg: sanitizer.bypassSecurityTrustHtml(socialMedia.fields.svg),
        };
      }
    ),
  };
}
