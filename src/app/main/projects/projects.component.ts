import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      imgSmall: 'assets/images/thumbnail-project-1-small.webp',
      imgLarge: 'assets/images/thumbnail-project-1-large.webp',
      alt: 'Project 1',
      title: 'DESIGN PORTFOLIO',
      skills: ['HTML', 'CSS'],
    },
    {
      imgSmall: 'assets/images/thumbnail-project-2-small.webp',
      imgLarge: 'assets/images/thumbnail-project-2-large.webp',
      alt: 'Project 1',
      title: 'E-LEARNING LANDING PAGE',
      skills: ['HTML', 'CSS'],
    },
    {
      imgSmall: 'assets/images/thumbnail-project-3-small.webp',
      imgLarge: 'assets/images/thumbnail-project-3-large.webp',
      alt: 'Project 1',
      title: 'TODO WEB APP',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
    {
      imgSmall: 'assets/images/thumbnail-project-4-small.webp',
      imgLarge: 'assets/images/thumbnail-project-4-large.webp',
      alt: 'Project 1',
      title: 'ENTERTAINMENT WEB APP',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
    {
      imgSmall: 'assets/images/thumbnail-project-5-small.webp',
      imgLarge: 'assets/images/thumbnail-project-5-large.webp',
      alt: 'Project 1',
      title: 'MEMORY GAME',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
    {
      imgSmall: 'assets/images/thumbnail-project-6-small.webp',
      imgLarge: 'assets/images/thumbnail-project-6-large.webp',
      alt: 'Project 1',
      title: 'ART GALLERY SHOWCASE',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
  ];
}
