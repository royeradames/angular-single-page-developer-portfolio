import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'theme-logo',
  templateUrl: './theme-logo.component.html',
  styleUrls: ['./theme-logo.component.scss'],
})
export class ThemeLogoComponent {
  socialLinks = this.dataService.socialLinks.value;

  constructor(private dataService: DataService) {
    this.dataService.socialLinks.subscribe((data) => {
      this.socialLinks = data;
    });
  }
}
