import { Component, Input } from '@angular/core';
import {
  ProjectInterface,
  ProjectListInterface,
} from '../../../share/data.service';

@Component({
  selector: 'project-links[project][projects]',
  templateUrl: './project-links.component.html',
  styleUrls: ['./project-links.component.scss'],
})
export class ProjectLinksComponent {
  @Input() project!: ProjectInterface;
  @Input() projects!: ProjectListInterface;
}
