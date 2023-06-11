import { Component, HostListener } from '@angular/core';
import { DataService } from '../../share/data.service';

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
  desktopWidth = this.getDesktopWidth(window.innerWidth, this.desktopSize);

  constructor(private dataService: DataService) {
    this.dataService.projectList.subscribe((projectList) => {
      this.projects = projectList;
    });

    for (let i = 0; i < this.projects.projects.length; i++) {
      this.hovering.push(false);
      this.clicked.push(false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.desktopWidth = this.getDesktopWidth(
      event.target.innerWidth,
      this.desktopSize
    );
  }

  getDesktopWidth(windowWidth: number, desktopSize: number): boolean {
    return windowWidth >= desktopSize;
  }
}
