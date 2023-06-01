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
import { SkillPageDataInterface } from '../model/link.interface';
import { skillPageFacade } from './skill-page.facade';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { FaviconService } from './favicon.service';
import { environment } from '../../environments/environment';
import {
  headMetaDataFacade,
  HeadMetaDataInterface,
} from './head-meta-data.facade';

@Injectable({ providedIn: 'root' })
export class DataService {
  aboutPageData!: BehaviorSubject<AboutPageDataInterface>;
  socialLinks!: BehaviorSubject<SocialLinksInterface>;
  projectList!: BehaviorSubject<ProjectListInterface>;
  contactPageData!: BehaviorSubject<ContactPageInterface>;
  skillPageData!: BehaviorSubject<SkillPageDataInterface>;
  headMetaData!: BehaviorSubject<HeadMetaDataInterface>;

  constructor(
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private faviconService: FaviconService,
    private metaService: Meta
  ) {}
  loadHeadMetaData(HeadMetaData: HeadMetaDataInterface): void {
    this.titleService.setTitle(HeadMetaData.title);
    this.faviconService.setFavicon(HeadMetaData.icon);

    this.metaService.updateTag({
      name: 'og:title',
      content: HeadMetaData.title,
    });
    this.metaService.updateTag({
      name: 'og:description',
      content: HeadMetaData.description,
    });
    this.metaService.updateTag({ name: 'og:url', content: HeadMetaData.url });
    this.metaService.updateTag({
      name: 'og:image',
      content: HeadMetaData.previewImage,
    });
  }
  async loadData() {
    const client = createClient({
      space: environment.contentful.space,
      environment: environment.contentful.environment,
      accessToken: environment.contentful.accessToken,
    });
    const userEntryId = environment.contentful.userEntryId;
    const socialLinksEntryId = environment.contentful.socialLinksEntryId;
    const projectListEntryId = environment.contentful.projectListEntryId;
    const aboutPageEntryId = environment.contentful.aboutPageEntryId;
    const skillPageEntryId = environment.contentful.skillPageEntryId;
    const headMetaDataEntryId = environment.contentful.headMetaDataEntryId;
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

    this.headMetaData = new BehaviorSubject<HeadMetaDataInterface>(
      headMetaDataFacade(headMetaDataEntry)
    );
    this.loadHeadMetaData(this.headMetaData.value);
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
