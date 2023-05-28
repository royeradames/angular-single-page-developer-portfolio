import { ProjectListInterface } from '../model/project-list.interface';

export function facadeProjectList(projectListEntry: any): ProjectListInterface {
  return {
    title: projectListEntry.fields.title,
    projects: projectListEntry.fields.projects.map((project: any) => {
      return {
        title: project.fields.title,
        description: project.fields.description,
        projectLink: project.fields.projectLink,
        codeLink: project.fields.codeLink,
        sources: project.fields.sources?.map((source: any) => {
          return {
            src: source.fields.img.fields.file.url,
            media: source.fields.media,
            height: source.fields.img.fields.file.details.image.height,
            width: source.fields.img.fields.file.details.image.width,
          };
        }),
        skills: project.fields.skills,
        viewProjectOnNewTab: project.fields.viewProjectOnNewTab,
        viewCodeLink: project.fields.viewCodeLink,
        viewCodeOnNewTab: project.fields.viewCodeOnNewTab,
        image: {
          src: project.fields.image.fields.file.url,
          height: project.fields.image.fields.file.details.image.height,
          width: project.fields.image.fields.file.details.image.width,
          alt: project.fields.image.fields.description,
        },
      };
    }),
    actionText: projectListEntry.fields.actionText,
    actionLink: projectListEntry.fields.actionLink,
    viewCodeText: projectListEntry.fields.viewCodeText,
    viewProjectText: projectListEntry.fields.viewProjectText,
  };
}
