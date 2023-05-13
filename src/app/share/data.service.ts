import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserDataInterface } from '../model/user.interface';
import { createClient } from 'contentful';

@Injectable({ providedIn: 'root' })
export class DataService {
  data: any;
  user!: BehaviorSubject<UserDataInterface>;

  constructor() {}

  async loadData() {
    const client = createClient({
      space: 'kmmvo7glwotb',
      environment: 'master',
      accessToken: 'f1_jmI8jf6_6qWjQEhewDlErAo4bCSaNw7OCsKo-eRs',
    });

    const userEntry: any = await client.getEntry('6CFGkHkvZseNUjIZOMAe4X');

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
  }
}
