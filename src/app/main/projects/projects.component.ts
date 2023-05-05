import { Component } from '@angular/core';

export interface ProjectsInterface {
  title: string;
  skills: string[];
  url: { code: string; project: string };
  picture: {
      img: { src: string; alt: string };
      sources: { src: string; media: string }[];
    };
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements  {

  projects: ProjectsInterface[] = [
    {
      title: 'DESIGN PORTFOLIO',
      skills: ['HTML', 'CSS'],
      url: {
        project: '#',
        code: 'github.com/royeradames',
      },
      picture: {
        sources: [
          {
            src: 'assets/images/thumbnail-project-1-small.webp',
            media: '(max-width: 768px)',
          },
          {
            src: 'assets/images/thumbnail-project-1-large.webp',
            media: '(max-width: 1024px)',
          },
        ],
        img: {
          src: 'assets/images/thumbnail-project-1-small.webp',
          alt: 'Project 1',
        },
      },
    },
    {
      title: 'E-LEARNING LANDING PAGE',
      skills: ['HTML', 'CSS'],
      url: {
        project: '#',
        code: 'github.com/royeradames',
      },
      picture: {
        sources: [
          {
            src: 'assets/images/thumbnail-project-2-small.webp',
            media: '(max-width: 768px)',
          },
          {
            src: 'assets/images/thumbnail-project-2-large.webp',
            media: '(max-width: 1024px)',
          },
        ],
        img: {
          src: 'assets/images/thumbnail-project-2-small.webp',
          alt: 'Project 1',
        },
      },
    },
    {
      title: 'TODO WEB APP',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
      url: {
        project: '#',
        code: 'github.com/royeradames',
      },
      picture: {
        sources: [
          {
            src: 'assets/images/thumbnail-project-3-small.webp',
            media: '(max-width: 768px)',
          },
          {
            src: 'assets/images/thumbnail-project-3-large.webp',
            media: '(max-width: 1024px)',
          },
        ],
        img: {
          src: 'assets/images/thumbnail-project-3-small.webp',
          alt: 'Project 1',
        },
      },
    },
    {
      title: 'ENTERTAINMENT WEB APP',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],

      url: {
        project: '#',
        code: 'github.com/royeradames',
      },
      picture: {
        sources: [
          {
            src: 'assets/images/thumbnail-project-4-small.webp',
            media: '(max-width: 768px)',
          },
          {
            src: 'assets/images/thumbnail-project-4-large.webp',
            media: '(max-width: 1024px)',
          },
        ],
        img: {
          src: 'assets/images/thumbnail-project-4-small.webp',
          alt: 'Project 1',
        },
      },
    },
    {
      title: 'MEMORY GAME',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],

      url: {
        project: '#',
        code: 'github.com/royeradames',
      },
      picture: {
        sources: [
          {
            src: 'assets/images/thumbnail-project-5-small.webp',
            media: '(max-width: 768px)',
          },
          {
            src: 'assets/images/thumbnail-project-5-large.webp',
            media: '(max-width: 1024px)',
          },
        ],
        img: {
          src: 'assets/images/thumbnail-project-5-small.webp',
          alt: 'Project 1',
        },
      },
    },
    {
      title: 'ART GALLERY SHOWCASE',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],

      url: {
        project: '#',
        code: 'github.com/royeradames',
      },
      picture: {
        sources: [
          {
            src: 'assets/images/thumbnail-project-6-small.webp',
            media: '(max-width: 768px)',
          },
          {
            src: 'assets/images/thumbnail-project-6-large.webp',
            media: '(max-width: 1024px)',
          },
        ],
        img: {
          src: 'assets/images/thumbnail-project-6-small.webp',
          alt: 'Project 1',
        },
      },
    },
  ];

}
