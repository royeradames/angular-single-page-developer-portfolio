import { Component, HostListener } from '@angular/core';
import { GlobalRef } from '../../share/window-ref.injectable';

@Component({
  selector: 'flooding-menu',
  templateUrl: './flooding-menu.component.html',
  styleUrls: ['./flooding-menu.component.scss'],
})
export class FloodingMenuComponent {
  isScrolled = false;
  isFooterVisible = false;
  constructor(private globalRef: GlobalRef) {}
  ngOnInit() {
    this.globalRef.nativeWindow.addEventListener(
      'scroll',
      () => this.scrollEvent,
      true
    );
  }

  ngOnDestroy() {
    this.globalRef.nativeWindow.removeEventListener(
      'scroll',
      this.scrollEvent,
      true
    );
  }

  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    this.isScrolled = this.globalRef.nativeWindow.scrollY >= 200; // Change 200 to the scroll depth you want

    const footerElement =
      this.globalRef.nativeDocument.getElementById('footer-links');
    if (!footerElement) return;
    const footerRect = footerElement.getBoundingClientRect();
    this.isFooterVisible =
      Math.round(footerRect.bottom) <=
      this.globalRef.nativeWindow.innerHeight + Math.round(footerRect.height);
  }
}
