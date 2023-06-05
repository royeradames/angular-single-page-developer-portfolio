import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = false;

  setDarkTheme(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
    if (this.darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  getDarkTheme() {
    return this.darkTheme;
  }
}
