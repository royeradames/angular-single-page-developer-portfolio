import { Component, OnInit } from '@angular/core';
import { createClient } from 'contentful';
import { UserDataInterface } from '../../model/user.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  userData!: UserDataInterface;
  isLoading = true;

  constructor() {}

  ngOnInit(): void {
    const client = createClient({
      space: 'kmmvo7glwotb',
      environment: 'master',
      accessToken: 'f1_jmI8jf6_6qWjQEhewDlErAo4bCSaNw7OCsKo-eRs',
    });

    client
      .getEntry('6CFGkHkvZseNUjIZOMAe4X')
      .then((userEntry: any) => {
        console.log(userEntry);
        this.isLoading = false;
        this.userData = {
          name: userEntry.fields.name,
          greeting: userEntry.fields.greeting,
          about: userEntry.fields.about,
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
        };
      })
      .catch((error) => {
        console.error(error);
        this.isLoading = false;
      });
  }
}
