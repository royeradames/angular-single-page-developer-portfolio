import { Component } from '@angular/core';
import { DataService } from '../share/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  headMetaData = this.dataService.headMetaData.value;
  constructor(private dataService: DataService) {}
}
