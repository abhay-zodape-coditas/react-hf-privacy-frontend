import { IFilePreviewProps } from "./dragAndDrop.types";
import styles from "./filePreview.module.scss";

const FilePreview = ({ fileData }: IFilePreviewProps) => {
  return (
    <div className={styles.fileList}>
      <div className={styles.fileContainer} data-testid="filePreview">
        <>
          <ol className={styles.filesEntry}>
            <li className={styles.fileList}>
              <div className={styles.fileName}>{fileData?.name}</div>
            </li>
          </ol>
        </>
      </div>
    </div>
  );
};

export default FilePreview;
