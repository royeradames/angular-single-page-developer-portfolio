import { UserDataInterface } from '../../model/user.interface';

export const userData: UserDataInterface = {
  sources: [
    {
      src: 'assets/images/image-profile-mobile.webp',
      media: '(min-width: 1px)',
      height: '766',
      width: '348',
    },
    {
      src: 'assets/images/image-profile-tablet.webp',
      media: '(min-width: 768px)',
      height: '1200',
      width: '646',
    },
    {
      src: 'assets/images/image-profile-desktop.webp',
      media: '(min-width: 1440px)',
      height: '1440',
      width: '890',
    },
  ],
  img: {
    src: 'assets/images/image-profile-desktop.webp',
    alt: 'Adam Keyes',
    height: '1440',
    width: '890',
  },
  name: 'Adam Keyes',
};
