export interface IFormSelectsProps {
  fieldName: string;
  required: boolean;
  onChange: (e: any) => void;
  options: any;
  registerProps: any;
  val: string | undefined;
}
