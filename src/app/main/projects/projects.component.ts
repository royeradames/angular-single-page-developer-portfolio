import { Component } from '@angular/core';
import { DataService, ProjectListInterface } from '../../share/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects!: ProjectListInterface;

  constructor(dataService: DataService) {
    dataService.projectList.subscribe((projectList) => {
      this.projects = projectList;
    });
  }
}
