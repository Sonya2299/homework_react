import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import styles from "./styles.module.scss";

const CreateTodoForm = ({ taskText, handleSubmit, handleChange }) => {
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.inputAdd}
        placeholder={"Write task..."}
        type="text"
        name="taskText"
        value={taskText}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
};

export default CreateTodoForm;
