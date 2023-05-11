import { PictureInterface } from '../../model/picture.interface';

export interface UserDataInterface {
  name: string;
  picture: PictureInterface;
}

export const userData: UserDataInterface = {
  picture: {
    sources: [
      {
        src: 'assets/images/image-profile-desktop.webp',
        media: '(min-width: 1440px)',
      },
      {
        src: 'assets/images/image-profile-mobile.webp',
        media: '(max-width: 767px)',
      },
      {
        src: 'assets/images/image-profile-tablet.webp',
        media: '(min-width: 768px)',
      },
    ],
    img: { src: 'assets/images/image-profile-desktop.webp', alt: 'Adam Keyes' },
  },
  name: 'Adam Keyes',
};
