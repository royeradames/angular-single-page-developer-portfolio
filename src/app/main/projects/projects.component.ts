import { Component, HostListener } from '@angular/core';
import { DataService } from '../../share/data.service';
import { GlobalRef } from '../../share/global-ref/global-ref.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = this.dataService.projectList.value;
  hovering: boolean[] = [];
  clicked: boolean[] = [];
  private desktopSize = 1280;
  desktopWidth = this.getDesktopWidth(
    this.globalRef.nativeWindow.innerWidth,
    this.desktopSize
  );

  get mobileWidth(): boolean {
    return !this.desktopWidth;
  }
  constructor(private dataService: DataService, private globalRef: GlobalRef) {
    this.dataService.projectList.subscribe((projectList) => {
      this.projects = projectList;
    });

    for (let i = 0; i < this.projects.projects.length; i++) {
      this.hovering.push(false);
      this.clicked.push(false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.desktopWidth = this.getDesktopWidth(
      (event.target as Window).innerWidth,
      this.desktopSize
    );
  }

  getDesktopWidth(windowWidth: number, desktopSize: number): boolean {
    return windowWidth >= desktopSize;
  }
}
