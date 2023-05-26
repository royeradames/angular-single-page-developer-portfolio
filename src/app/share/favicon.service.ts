import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  constructor(@Inject(DOCUMENT) private document: any) {}

  setFavicon(url: string): void {
    const link =
      this.document.querySelector('link[rel*="icon"]') ||
      this.document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    this.document.getElementsByTagName('head')[0].appendChild(link);
  }
}
