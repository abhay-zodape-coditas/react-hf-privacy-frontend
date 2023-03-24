import { Button } from "react-bootstrap";
import styles from "./formButtons.module.scss";
import { IFormButtonsProps } from "./formButtons.types";

const FormButtons = ({
  handleClick,
  button,
  buttonName,
}: IFormButtonsProps) => {
  return (
    <>
      <Button
        className={button?.active ? styles.userTypeBtn : styles.userInActiveBtn}
        onClick={handleClick}
        data-testid="button"
      >
        {buttonName}
      </Button>
    </>
  );
};

export default FormButtons;
