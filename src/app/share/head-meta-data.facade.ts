export interface HeadMetaDataInterface {
  title: string;
  description: string;
  url: string;
  icon: string;
  previewImage: string;
}
export function headMetaDataFacade(
  headMetaDataEntry: any
): HeadMetaDataInterface {
  return {
    title: headMetaDataEntry.fields.title,
    description: headMetaDataEntry.fields.description,
    url: headMetaDataEntry.fields.url,
    icon: headMetaDataEntry.fields.icon.fields.file.url,
    previewImage: headMetaDataEntry.fields.previewImage.fields.file.url,
  };
}
