import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

import styles from "./styles.module.scss";

const TodoListView = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h1> TODO LISTS</h1>

      <div className={styles.wrapper}>
        <div className={styles.todo}>
          <h2> Add Your List Here</h2>
        </div>

        <div className={styles.addItems}>
          <input
            type="text"
            placeholder="Add Items..."
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            className={styles.addbutton}
            onClick={() => dispatch(addTodo(inputData))}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoListView;
