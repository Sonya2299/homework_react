import { useDispatch, useSelector } from "react-redux";

import { useForm } from "hooks";

import Layout from "../components/Layout";

import {
  createTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  undoTodo,
  saveTodo,
} from "../reducers";

import { todosSelector } from "../selectors";

const TodosContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosSelector);

  const { form, handleReset, handleChange } = useForm({ taskText: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createTodo(form));
    handleReset();
  };

  const handleTaskRemove = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleTaskComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleTaskEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleTaskEditCancel = (id) => {
    dispatch(undoTodo(id));
  };

  const handleTaskSave = (taskData) => {
    dispatch(saveTodo(taskData));
  };

  return (
    <Layout
      todos={todos}
      taskText={form.taskText}
      handleTaskTextChange={handleChange}
      handleSubmit={handleSubmit}
      handleTaskDelete={handleTaskRemove}
      handleTaskComplete={handleTaskComplete}
      handleTaskEdit={handleTaskEdit}
      handleTaskEditCancel={handleTaskEditCancel}
      handleTaskCancel={handleTaskEditCancel}
      handleTaskSave={handleTaskSave}
    />
  );
};

export default TodosContainer;
