import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../model/project.interface';

@Component({
  selector: 'app-project-image[project]',
  templateUrl: './project-image.component.html',
  styleUrls: ['./project-image.component.scss'],
})
export class ProjectImageComponent {
  @Input() project!: ProjectInterface;
}
