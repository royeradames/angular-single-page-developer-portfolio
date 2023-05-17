import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDataInterface } from '../model/user.interface';
import { createClient } from 'contentful';
import { ContactPageInterface } from '../model/contact-page.intergace';
import { SocialLinksInterface } from '../model/social-links.interface';
import { ProjectListInterface } from '../model/project-list.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
  data: any;
  user!: BehaviorSubject<UserDataInterface>;
  socialLinks!: BehaviorSubject<SocialLinksInterface>;
  projectList!: BehaviorSubject<ProjectListInterface>;
  contactPageData!: BehaviorSubject<ContactPageInterface>;

  constructor() {}

  async loadData() {
    const client = createClient({
      space: 'kmmvo7glwotb',
      environment: 'master',
      accessToken: 'f1_jmI8jf6_6qWjQEhewDlErAo4bCSaNw7OCsKo-eRs',
    });
    const userEntryId = '6CFGkHkvZseNUjIZOMAe4X';
    const socialLinksEntryId = '3pl8dDzcamGNZA57CIIGkL';
    const projectListEntryId = '2NIJqNOAizI3EHZhUSR628';
    const aboutPageEntryId = 'Zo13npZTVYY16KerCmL26';
    const [userEntry, socialLinksEntry, projectListEntry, aboutPageEntry]: any =
      await Promise.all([
        client.getEntry(userEntryId),
        client.getEntry(socialLinksEntryId),
        client.getEntry(projectListEntryId, { include: 3 }),
        client.getEntry(aboutPageEntryId),
      ]);

    this.contactPageData = new BehaviorSubject<ContactPageInterface>({
      title: aboutPageEntry.fields.title,
      message: aboutPageEntry.fields.message,
      nameLabel: aboutPageEntry.fields.nameLabel,
      namePlaceholder: aboutPageEntry.fields.namePlaceholder,
      emailLabel: aboutPageEntry.fields.emailLabel,
      emailPlaceholder: aboutPageEntry.fields.emailPlaceholder,
      messageLabel: aboutPageEntry.fields.messageLabel,
      messagePlaceholder: aboutPageEntry.fields.messagePlaceholder,
      actionLabel: aboutPageEntry.fields.actionLabel,
    });
    this.projectList = new BehaviorSubject<ProjectListInterface>({
      title: projectListEntry.fields.title,
      projects: projectListEntry.fields.projects.map((project: any) => {
        return {
          title: project.fields.title,
          projectLink: project.fields.projectLink,
          codeLink: project.fields.codeLink,
          sources: project.fields.sources.map((source: any) => {
            return {
              src: source.fields.img.fields.file.url,
              media: source.fields.media,
              height: source.fields.img.fields.file.details.image.height,
              width: source.fields.img.fields.file.details.image.width,
            };
          }),
          skills: project.fields.skills,
          viewProjectOnNewTab: project.fields.viewProjectOnNewTab,
          viewCodeLink: project.fields.viewCodeLink,
          viewCodeOnNewTab: project.fields.viewCodeOnNewTab,
          image: {
            src: project.fields.image.fields.file.url,
            height: project.fields.image.fields.file.details.image.height,
            width: project.fields.image.fields.file.details.image.width,
            alt: project.fields.image.fields.description,
          },
        };
      }),
      actionText: projectListEntry.fields.actionText,
      actionLink: projectListEntry.fields.actionLink,
      viewCodeText: projectListEntry.fields.viewCodeText,
      viewProjectText: projectListEntry.fields.viewProjectText,
    });
    this.user = new BehaviorSubject<UserDataInterface>({
      name: userEntry.fields.name,
      greeting: userEntry.fields.greeting,
      about: userEntry.fields.about,
      actionLabel: userEntry.fields.actionLabel,
      link: userEntry.fields.link,
      img: {
        height: userEntry.fields.img.fields.file.details.image.height,
        width: userEntry.fields.img.fields.file.details.image.width,
        src: userEntry.fields.img.fields.file.url,
        alt: 'profile',
      },
      sources: userEntry.fields.sources.map((source: any) => {
        return {
          src: source.fields.img.fields.file.url,
          media: source.fields.media,
          height: source.fields.img.fields.file.details.image.height,
          width: source.fields.img.fields.file.details.image.width,
        };
      }),
    });

    this.socialLinks = new BehaviorSubject<SocialLinksInterface>({
      name: socialLinksEntry.fields.name,
      nameLink: socialLinksEntry.fields.nameLink,
      github: socialLinksEntry.fields.github,
      frontendMentor: socialLinksEntry.fields.frontendMentor,
      linkedin: socialLinksEntry.fields.linkedin,
      twitter: socialLinksEntry.fields.twitter,
    });
  }
}
