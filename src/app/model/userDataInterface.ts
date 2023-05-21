import { ImgInterface } from './img.interface';
import { SourceInterface } from './source.interface';

export interface UserDataInterface {
  name: string;
  img: ImgInterface;
  sources: SourceInterface[];
  greeting: string;
  about: string;
  link: string;
  actionLabel: string;
}