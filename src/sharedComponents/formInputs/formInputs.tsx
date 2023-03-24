import { useForm } from "react-hook-form";
import styles from "./formInputs.module.scss";
import { IFormInputsProps } from "./formInputs.types";
const FormInputs = ({
  type,
  placeholder,
  fieldName,
  requiredText,
  onChange,
  maxLength,
  pattern,
}: IFormInputsProps) => {
  const { register } = useForm();

  return (
    <>
      <input
        data-testid="formInput"
        className={styles.inputField}
        type={type}
        placeholder={placeholder}
        {...register(`${fieldName}`, {
          required: `${requiredText}`,
          onChange: onChange,
          maxLength: maxLength,
          pattern: pattern,
        })}
      />
    </>
  );
};

export default FormInputs;
