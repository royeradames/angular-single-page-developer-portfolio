import { SourceInterface } from './source.interface';
import { ImgInterface } from './img.interface';

export interface ProjectInterface {
  title: string;
  projectLink: string;
  codeLink: string;
  sources: SourceInterface[];
  skills: string[];
  image: ImgInterface;
  viewProjectOnNewTab: boolean;
  viewCodeOnNewTab: boolean;
}
