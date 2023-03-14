import React from "react";
import TodoListView from "../components";
import { todoListsSelector } from "../selectors";
import { useSelector } from "react-redux";
import { addTodo } from "../actions";

const ReduxTodoListManager = () => {
  const todoLists = useSelector(todoListsSelector);

  return (
    <div>
      {todoLists.map(({ id, inputData }) => (
        <TodoListView key={id} inputData={inputData} />
      ))}
      ;
    </div>
  );
};

export default ReduxTodoListManager;
