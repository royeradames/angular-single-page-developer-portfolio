import { Component, HostListener } from '@angular/core';
import { WindowRef } from '../../share/window-ref.injectable';

@Component({
  selector: 'flooding-menu',
  templateUrl: './flooding-menu.component.html',
  styleUrls: ['./flooding-menu.component.scss'],
})
export class FloodingMenuComponent {
  isScrolled = false;

  constructor(private windowRef: WindowRef) {}
  ngOnInit() {
    this.windowRef.nativeWindow.addEventListener(
      'scroll',
      () => this.scrollEvent,
      true
    );
  }

  ngOnDestroy() {
    this.windowRef.nativeWindow.removeEventListener(
      'scroll',
      this.scrollEvent,
      true
    );
  }

  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    this.isScrolled = this.windowRef.nativeWindow.scrollY >= 200; // Change 200 to the scroll depth you want
  }
}
