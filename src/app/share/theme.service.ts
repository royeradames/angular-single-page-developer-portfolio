import { Injectable } from '@angular/core';
import { GlobalRef } from './global-ref/global-ref.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = false;

  constructor(private globalRef: GlobalRef) {}
  setDarkTheme(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
    if (this.darkTheme) {
      this.globalRef.nativeDocument.documentElement.classList.add('dark');
    } else {
      this.globalRef.nativeDocument.documentElement.classList.remove('dark');
    }
  }

  getDarkTheme() {
    return this.darkTheme;
  }
}
