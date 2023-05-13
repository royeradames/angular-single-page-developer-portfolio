import { SourceInterface } from './source.interface';
import { ImgInterface } from './img.interface';

export interface UserDataInterface {
  name: string;
  img: ImgInterface;
  sources: SourceInterface[];
  greeting: string;
  about: string;
  link: string;
  actionLabel: string;
}
