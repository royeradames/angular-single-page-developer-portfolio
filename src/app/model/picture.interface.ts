export interface PictureInterface {
  img: ImgInterface;
  sources: SourcesInterface[];
}

export interface SourcesInterface extends PictureImageInterface2 {
  media: string;
}

export interface ImgInterface extends PictureImageInterface2 {
  alt: string;
}

export interface PictureImageInterface2 {
  src: string;
  height: string;
  width: string;
}
