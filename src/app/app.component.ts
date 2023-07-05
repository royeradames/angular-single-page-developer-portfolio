import { Component } from '@angular/core';
import { ThemeService } from './share/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    //default theme is dark
    this.themeService.setDarkTheme(true);
  }
}
