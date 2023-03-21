import CreateTodoForm from "../CreateTodoForm";
import EditableTodoItem from "../EditableTodoItem";
import TodoItem from "../TodoItem";

import styles from "./styles.module.scss";

const Layout = ({
  todos,
  taskText,
  handleTaskTextChange,
  handleSubmit,
  handleTaskDelete,
  handleTaskComplete,
  handleTaskEdit,
  handleTaskCancel,
  handleTaskSave,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO LIST</h1>
      <CreateTodoForm
        taskText={taskText}
        handleChange={handleTaskTextChange}
        handleSubmit={handleSubmit}
      />
      <div className={styles.todosArea}>
        {todos.map(({ id, text, isCompleted, isEditMode }, index) => {
          const taskNumber = index + 1;

          return isEditMode ? (
            <EditableTodoItem
              key={id}
              taskText={text}
              taskNumber={taskNumber}
              id={id}
              handleCancel={handleTaskCancel}
              handleSave={handleTaskSave}
            />
          ) : (
            <TodoItem
              key={id}
              id={id}
              isCompleted={isCompleted}
              taskText={text}
              taskNumber={taskNumber}
              handleDelete={handleTaskDelete}
              handleComplete={handleTaskComplete}
              handleEdit={handleTaskEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
