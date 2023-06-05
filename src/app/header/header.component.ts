import { Component } from '@angular/core';
import { ThemeService } from '../share/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}
  toggleTheme() {
    this.themeService.setDarkTheme(!this.themeService.getDarkTheme());
  }
}
