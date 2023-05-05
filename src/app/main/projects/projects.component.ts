import { Component } from '@angular/core';
import { projects } from './projects.data';
import { ProjectsInterface } from './model/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectsInterface[] = projects;
}
