import { Component } from '@angular/core';
import { DataService } from './share/data.service';
import { HeadMetaDataInterface } from './share/head-meta-data.facade';
import { ThemeService } from './share/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headMetaData = this.dataService.headMetaData.value;
  constructor(
    private dataService: DataService,
    private themeService: ThemeService
  ) {
    this.dataService.headMetaData.subscribe((headMetaData) => {
      this.headMetaData = headMetaData;
    });
    //default theme is dark
    this.themeService.setDarkTheme(true);
  }
}
