import { Component } from '@angular/core';
import { DataService, SocialLinksInterface } from '../../share/data.service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  socialLinks!: SocialLinksInterface;

  constructor(private dataService: DataService) {
    this.dataService.socialLinks.subscribe((data) => {
      this.socialLinks = data;
    });
  }
}
