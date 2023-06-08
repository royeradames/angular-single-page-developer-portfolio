import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}
  toggleTheme() {
    this.themeService.setDarkTheme(!this.themeService.getDarkTheme());
  }
}
