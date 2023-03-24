import { useContext } from "react";
import { LanguageContext } from "../../hoc/languageProvider";
import FormButtons from "../formButtons/formButtons";
import styles from "./formButtonInput.module.scss";
import { IFormButtonInputProps } from "./formButtonInput.types";

const FormButtonInput = ({
  buttonList,
  buttonErr,
  handleButtonChange,
}: IFormButtonInputProps) => {
  const { localString } = useContext(LanguageContext);

  return (
    <div
      className={!buttonErr ? styles.userTypeLayout : styles.userTypeErr}
      data-testid="formButtonsInput"
    >
      {buttonList?.map((button: any, index: number) => {
        return (
          <div key={index}>
            <FormButtons
              button={button}
              handleClick={() => handleButtonChange(button.name)}
              buttonName={localString?.[button.name] || ""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FormButtonInput;
