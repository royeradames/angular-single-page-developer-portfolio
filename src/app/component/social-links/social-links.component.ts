import { Component, inject } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  private dataService = inject(DataService);
  socialLinks = this.dataService.socialLinks.value;

  constructor() {
    this.dataService.socialLinks.subscribe((data) => {
      this.socialLinks = data;
    });
  }
}
