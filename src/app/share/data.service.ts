import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createClient } from 'contentful';
import { ContactPageInterface } from '../model/contact-page.intergace';
import { SocialLinksInterface } from '../model/social-links.interface';
import { ProjectListInterface } from '../model/project-list.interface';
import { facadeContactPageData } from './facadeContactPageData';
import { facadeProjectList } from './facadeProjectList';
import { AboutPageDataInterface } from '../model/aboutPageDataInterface';
import { facadeUserData } from './facadeUserData';
import { facadeSocialLinks } from './facadeSocialLinks';
import { LinkInterface, SkillPageDataInterface } from '../model/link.interface';
import { skillPageFacade } from './skill-page.facade';
import { DomSanitizer } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { FaviconService } from './favicon.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  aboutPageData!: BehaviorSubject<AboutPageDataInterface>;
  socialLinks!: BehaviorSubject<SocialLinksInterface>;
  projectList!: BehaviorSubject<ProjectListInterface>;
  contactPageData!: BehaviorSubject<ContactPageInterface>;
  skillPageData!: BehaviorSubject<SkillPageDataInterface>;

  constructor(
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private faviconService: FaviconService
  ) {}
  loadHeadMetaData(headMetaDataEntry: any, titleService: Title): void {
    titleService.setTitle(headMetaDataEntry.fields.title);
    this.faviconService.setFavicon(
      headMetaDataEntry.fields.icon.fields.file.url
    );
  }
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
    const skillPageEntryId = '7em2OvzAS2qeQyi4heZuN6';
    const headMetaDataEntryId = 'kCMVZVGOdk4ORn27u2GIt';
    const [
      userEntry,
      socialLinksEntry,
      projectListEntry,
      aboutPageEntry,
      skillPageEntry,
      headMetaDataEntry,
    ]: any = await Promise.all([
      client.getEntry(userEntryId),
      client.getEntry(socialLinksEntryId),
      client.getEntry(projectListEntryId, { include: 3 }),
      client.getEntry(aboutPageEntryId),
      client.getEntry(skillPageEntryId),
      client.getEntry(headMetaDataEntryId),
    ]);

    this.loadHeadMetaData(headMetaDataEntry, this.titleService);
    this.contactPageData = new BehaviorSubject<ContactPageInterface>(
      facadeContactPageData(aboutPageEntry)
    );
    this.projectList = new BehaviorSubject<ProjectListInterface>(
      facadeProjectList(projectListEntry)
    );
    this.aboutPageData = new BehaviorSubject<AboutPageDataInterface>(
      facadeUserData(userEntry)
    );

    this.socialLinks = new BehaviorSubject<SocialLinksInterface>(
      facadeSocialLinks(socialLinksEntry, this.sanitizer)
    );

    this.skillPageData = new BehaviorSubject<SkillPageDataInterface>(
      skillPageFacade(skillPageEntry, this.sanitizer)
    );
  }
}
