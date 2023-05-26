import { AboutPageDataInterface } from '../model/aboutPageDataInterface';

export function facadeUserData(userEntry: any): AboutPageDataInterface {
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
      alt: userEntry.fields.img.fields.title,
    },
    sources: userEntry.fields.sources?.map((source: any) => {
      return {
        src: source.fields.file.url,
        media: source.fields.description,
        height: source.fields.file.details.image.height,
        width: source.fields.file.details.image.width,
      };
    }),
  };
}
