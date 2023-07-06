import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { UtilityService } from '../../../utility/utility.service';

@Component({
  selector: 'theme-social-links[label]',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  @Input() label = 'Social Links';
  id = 'social-links';
  socialLinks = this.dataService.socialLinks.value;

  constructor(
    private dataService: DataService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.id = this.id = this.utilityService.labelToId(this.label);
  }
}
