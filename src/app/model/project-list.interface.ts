import { ProjectInterface } from './project.interface';

export interface ProjectListInterface {
  title: string;
  id: string;
  pageAnchor: string;
  projects: ProjectInterface[];
  actionText: string;
  actionLink: string;
  viewProjectText: string;
  viewCodeText: string;
}
