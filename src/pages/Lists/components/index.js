import React, { useState } from "react";
import styles from "./todostyles.module.scss";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState();
  return (
    <div className={styles.wrapper}>
      <h1>Список задач</h1>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="введите задачу..."
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};
export default TodoInput;
