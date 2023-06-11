import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'flooding-menu',
  templateUrl: './flooding-menu.component.html',
  styleUrls: ['./flooding-menu.component.scss'],
})
export class FloodingMenuComponent {
  isScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    this.isScrolled = window.pageYOffset >= 200; // Change 200 to the scroll depth you want
  }
}
