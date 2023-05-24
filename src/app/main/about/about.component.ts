import { Component } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  userData = this.dataService.user.value;

  constructor(private dataService: DataService) {
    this.dataService.user.subscribe((user) => {
      this.userData = user;
    });
  }
}
