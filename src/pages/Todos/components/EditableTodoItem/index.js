import { useForm } from "hooks";

import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const EditableTodoItem = ({
  id,
  taskNumber,
  taskText,
  handleSave,
  handleCancel,
}) => {
  const { form, handleChange } = useForm({ inputValue: taskText });

  return (
    <div className={styles.wrapper}>
      <div>{taskNumber}</div>

      <input
        className={styles.input}
        type="text"
        value={form.inputValue}
        name="inputValue"
        onChange={handleChange}
      />

      <div className={styles.controlsArea}>
        <Button
          variant="outlined"
          color="success"
          onClick={() => handleSave({ id, newText: form.inputValue })}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleCancel(id)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditableTodoItem;
