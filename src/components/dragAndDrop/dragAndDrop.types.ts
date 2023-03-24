import { IFormDataType } from "../../common/types/types";

export interface IDragAndDropProps {
  formData: IFormDataType | undefined;
  setFormData: (formData: any) => void;
}

export interface IFilePreviewProps {
  fileData: any;
}
