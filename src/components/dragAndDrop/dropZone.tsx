import { acceptedFileTypes } from "../../common/constants/data";
import { BaseSyntheticEvent, useContext, useRef } from "react";
import { LanguageContext } from "../../hoc/languageProvider";
import { IDragAndDropProps } from "./dragAndDrop.types";
import styles from "./dropZone.module.scss";
import FilePreview from "./filePreview";

const DropZone = ({ formData, setFormData }: IDragAndDropProps) => {
  const { localString } = useContext(LanguageContext);
  const clickableDiv = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const [files] = event.target.files;
    setFormData({
      ...formData,
      attachment: files,
    });
  };

  return (
    <>
      <div className={styles.dropzone} data-testid="dropZone">
        <input
          data-testid="fileSelect"
          id="fileSelect"
          type="file"
          ref={clickableDiv}
          className={styles.files}
          onChange={handleFileSelect}
          accept={acceptedFileTypes}
        />
        <label htmlFor="fileSelect" data-testid="attachment">
          {localString?.["attachments"]}
        </label>
        <div className={styles.uploadMessage} data-testid="uploadMessage">
          <p className={styles.uploadText}>{localString?.["fileSupport"]}</p>
        </div>
      </div>
      {/* Pass the selectect or dropped files as props */}
      <FilePreview fileData={formData?.attachment} />
    </>
  );
};

export default DropZone;
