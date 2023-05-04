import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  icons = [
    {
      src: 'assets/svg/icons-github-fill.svg',
      alt: 'github',
      href: 'https://github.com/royeradames',
    },
    {
      src: 'assets/svg/simple-icons_frontendmentor.svg',
      alt: 'frontendmentor',
      href: 'https://github.com/royeradames',
    },
    {
      src: 'assets/svg/LinkedIn.svg',
      alt: 'LinkedIn',
      href: 'https://github.com/royeradames',
    },
    {
      src: 'assets/svg/twitter-icons.svg',
      alt: 'twitter',
      href: 'https://github.com/royeradames',
    },
  ];
}
