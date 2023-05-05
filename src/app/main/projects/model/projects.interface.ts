export interface ProjectsInterface {
  title: string;
  skills: string[];
  url: { code: string; project: string };
  picture: {
    img: { src: string; alt: string };
    sources: { src: string; media: string }[];
  };
}
