import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme-link',
  templateUrl: './theme-link.component.html',
  styleUrls: ['./theme-link.component.scss'],
})
export class ThemeLinkComponent {
  @Input() href = '';
  @Input() target: null | string = null;
}
