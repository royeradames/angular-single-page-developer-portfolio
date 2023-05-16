import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDataInterface } from '../model/user.interface';
import { createClient } from 'contentful';
import { SourceInterface } from '../model/source.interface';
import { ImgInterface } from '../model/img.interface';

export interface SocialLinksInterface {
  name: string;
  nameLink: string;
  github: string;
  frontendMentor: string;
  linkedin: string;
  twitter: string;
}

export interface ProjectListInterface {
  title: string;
  projects: ProjectInterface[];
  actionText: string;
  actionLink: string;
  viewProjectText: string;
  viewCodeText: string;
}
export interface ProjectInterface {
  title: string;
  projectLink: string;
  codeLink: string;
  sources: SourceInterface[];
  skills: string[];
  image: ImgInterface;
  viewProjectOnNewTab: boolean;
  viewCodeOnNewTab: boolean;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  data: any;
  user!: BehaviorSubject<UserDataInterface>;
  socialLinks!: BehaviorSubject<SocialLinksInterface>;
  projectList!: BehaviorSubject<ProjectListInterface>;

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
    const [userEntry, socialLinksEntry, projectListEntry]: any =
      await Promise.all([
        client.getEntry(userEntryId),
        client.getEntry(socialLinksEntryId),
        client.getEntry(projectListEntryId, { include: 3 }),
      ]);

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
      viewProjectText: projectListEntry.fields.viewCodeText,
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
