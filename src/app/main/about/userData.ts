import { PictureInterface } from "../../model/picture.interface";

export interface UseDataInterface {
  name: string;
  picture: PictureInterface[];
}
export const userData: UseDataInterface = {
  picture: [],
  name: 'Adam Keyes'
}
