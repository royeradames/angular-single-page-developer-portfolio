import { UserDataInterface } from '../model/userDataInterface';

export function facadeUserData(userEntry: any): UserDataInterface {
  return {
    name: userEntry.fields.name,
    greeting: userEntry.fields.greeting,
    about: userEntry.fields.about,
    actionLabel: userEntry.fields.actionLabel,
    link: userEntry.fields.link,
    img: {
      height: userEntry.fields.img.fields.file.details.image.height,
      width: userEntry.fields.img.fields.file.details.image.width,
      src: userEntry.fields.img.fields.file.url,
      alt: 'profile',
    },
    sources: userEntry.fields.sources.map((source: any) => {
      return {
        src: source.fields.img.fields.file.url,
        media: source.fields.media,
        height: source.fields.img.fields.file.details.image.height,
        width: source.fields.img.fields.file.details.image.width,
      };
    }),
  };
}
