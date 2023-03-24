import styles from "./formLabels.module.scss";
import { IFormLabelsProps } from "./formLabels.types";

const FormLabels = ({ labelName, required }: IFormLabelsProps) => {
  return (
    <label className={styles.labelWrapper} data-testid="label">
      {labelName}
      {required ? (
        <span data-testid="required" className={styles.requiredField}>
          *
        </span>
      ) : null}
    </label>
  );
};

export default FormLabels;
