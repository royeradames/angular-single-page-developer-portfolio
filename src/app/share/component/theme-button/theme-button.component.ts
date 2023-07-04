import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  @Input('aria-expanded') expanded: boolean | undefined;
}
