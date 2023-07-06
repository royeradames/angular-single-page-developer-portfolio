import { Injectable } from '@angular/core';
import { GlobalRef } from './global-ref/global-ref.service';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  constructor(private globalRef: GlobalRef) {}

  setFavicon(url: string): void {
    const link: HTMLLinkElement =
      this.globalRef.nativeDocument.querySelector('link[rel*="icon"]') ||
      this.globalRef.nativeDocument.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    this.globalRef.nativeDocument
      .getElementsByTagName('head')[0]
      .appendChild(link);
  }
}
