import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDataInterface } from '../model/user.interface';
import { createClient } from 'contentful';

export interface SocialLinksInterface {
  name: string;
  nameLink: string;
  github: string;
  frontendMentor: string;
  linkedin: string;
  twitter: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  data: any;
  user!: BehaviorSubject<UserDataInterface>;
  socialLinks!: BehaviorSubject<SocialLinksInterface>;

  constructor() {}

  async loadData() {
    const client = createClient({
      space: 'kmmvo7glwotb',
      environment: 'master',
      accessToken: 'f1_jmI8jf6_6qWjQEhewDlErAo4bCSaNw7OCsKo-eRs',
    });
    const userEntryId = '6CFGkHkvZseNUjIZOMAe4X';
    const socialLinksEntryId = '3pl8dDzcamGNZA57CIIGkL';
    const [userEntry, socialLinksEntry]: any = await Promise.all([
      client.getEntry(userEntryId),
      client.getEntry(socialLinksEntryId),
    ]);

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
