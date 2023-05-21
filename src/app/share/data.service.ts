import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createClient } from 'contentful';
import { ContactPageInterface } from '../model/contact-page.intergace';
import { SocialLinksInterface } from '../model/social-links.interface';
import { ProjectListInterface } from '../model/project-list.interface';
import { facadeContactPageData } from './facadeContactPageData';
import { facadeProjectList } from './facadeProjectList';
import { UserDataInterface } from '../model/userDataInterface';
import { facadeUserData } from './facadeUserData';
import { facadeSocialLinks } from './facadeSocialLinks';

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

    this.contactPageData = new BehaviorSubject<ContactPageInterface>(
      facadeContactPageData(aboutPageEntry)
    );
    this.projectList = new BehaviorSubject<ProjectListInterface>(
      facadeProjectList(projectListEntry)
    );
    this.user = new BehaviorSubject<UserDataInterface>(
      facadeUserData(userEntry)
    );

    this.socialLinks = new BehaviorSubject<SocialLinksInterface>(
      facadeSocialLinks(socialLinksEntry)
    );
  }
}