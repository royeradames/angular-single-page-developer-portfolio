import { Component } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  AboutPageData = this.dataService.aboutPageData.value;

  constructor(private dataService: DataService) {
    this.dataService.aboutPageData.subscribe((user) => {
      this.AboutPageData = user;
    });
  }
}
