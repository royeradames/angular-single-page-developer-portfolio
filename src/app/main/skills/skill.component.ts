import { Component } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  skillPageData = this.dataService.skillPageData.value;
  constructor(private dataService: DataService) {
    this.dataService.skillPageData.subscribe((skillPageData) => {
      this.skillPageData = skillPageData;
    });
  }
}
