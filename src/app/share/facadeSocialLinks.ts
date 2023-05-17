import { SocialLinksInterface } from '../model/social-links.interface';

export function facadeSocialLinks(socialLinksEntry: any): SocialLinksInterface {
  return {
    name: socialLinksEntry.fields.name,
    nameLink: socialLinksEntry.fields.nameLink,
    github: socialLinksEntry.fields.github,
    frontendMentor: socialLinksEntry.fields.frontendMentor,
    linkedin: socialLinksEntry.fields.linkedin,
    twitter: socialLinksEntry.fields.twitter,
  };
}
