import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme-link[href]',
  templateUrl: './theme-link.component.html',
  styleUrls: ['./theme-link.component.scss'],
})
export class ThemeLinkComponent {
  @Input() href = '';
  @Input() target: null | '_blank' = null;
}
