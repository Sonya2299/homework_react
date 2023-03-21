import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { IconButton } from "@mui/material";

import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  isCompleted,
  taskNumber,
  taskText,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>{taskNumber}</div>
      <div className={isCompleted ? styles.completed : " "}>{taskText}</div>

      <div className={styles.controlsArea}>
        <IconButton onClick={() => handleEdit(id)}>
          <EditIcon />
        </IconButton>
        <IconButton color="success" onClick={() => handleComplete(id)}>
          <DoneOutlineIcon />
        </IconButton>
        <IconButton color="error" onClick={() => handleDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
