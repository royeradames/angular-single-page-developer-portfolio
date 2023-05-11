import { PictureInterface } from '../../../model/picture.interface';
import { UrlInterface } from '../../../model/url.intergace';

export interface ProjectsInterface {
  title: string;
  skills: string[];
  url: UrlInterface;
  picture: PictureInterface;
}
