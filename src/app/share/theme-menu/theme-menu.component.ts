import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../../utility/utility.service';

@Component({
  selector: 'theme-menu[label]',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.scss'],
})
export class ThemeMenuComponent implements OnInit {
  @Input() label = 'Navigation menu';
  id = 'navigation-menu';

  constructor(private utilityService: UtilityService) {}
  ngOnInit(): void {
    this.id = this.id = this.utilityService.labelToId(this.label);
  }
}
