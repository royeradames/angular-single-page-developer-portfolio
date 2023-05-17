import { Component } from '@angular/core';
import { DataService } from '../../share/data.service';
import { UserDataInterface } from '../../model/userDataInterface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  userData: UserDataInterface;
  isLoading = true;

  constructor(private dataService: DataService) {
    this.userData = this.dataService.user.value;
    this.dataService.user.subscribe((user) => {
      this.userData = user;
    });
  }
}
