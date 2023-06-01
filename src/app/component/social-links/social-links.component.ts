import { Component } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'theme-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  socialLinks = this.dataService.socialLinks.value;

  constructor(private dataService: DataService) {
    this.dataService.socialLinks.subscribe((data) => {
      this.socialLinks = data;
    });
  }
}
