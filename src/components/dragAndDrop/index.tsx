import styles from "./dragAndDrop.module.scss";
import { IDragAndDropProps } from "./dragAndDrop.types";
import DropZone from "./dropZone";

const DragAndDrop = ({ formData, setFormData }: IDragAndDropProps) => {
  return (
    <div className={styles.main} data-testid="mainContainer">
      <DropZone formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default DragAndDrop;
