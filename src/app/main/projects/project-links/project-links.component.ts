import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../model/project.interface';
import { ProjectListInterface } from '../../../model/project-list.interface';

@Component({
  selector: 'project-links[project][projects]',
  templateUrl: './project-links.component.html',
  styleUrls: ['./project-links.component.scss'],
})
export class ProjectLinksComponent {
  @Input() project!: ProjectInterface;
  @Input() projects!: ProjectListInterface;
}
