import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../model/project.interface';
import { ProjectListInterface } from '../../../model/project-list.interface';

@Component({
  selector:
    'link-toggle[hovering][desktopWidth][isTouchedList][project][projects][index]',
  templateUrl: './links-toggle.component.html',
  styleUrls: ['./links-toggle.component.scss'],
})
export class LinksToggleComponent {
  @Input() hovering!: boolean[];
  @Input() desktopWidth!: boolean;
  @Input() isTouchedList!: boolean[];
  @Input() project!: ProjectInterface;
  @Input() projects!: ProjectListInterface;
  @Input() index!: number;

  toggleLinks(index: number): void {
    if (!this.desktopWidth) return;
    this.isTouchedList[index] = !this.isTouchedList[index];
  }

  get isOutside(): boolean {
    return !this.hovering[this.index];
  }

  get isUntouched(): boolean {
    return !this.isTouchedList[this.index];
  }
}
