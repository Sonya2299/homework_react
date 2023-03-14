import React, { useState } from "react";
import TodoInput from "../components/index";
import Todolist from "../components/TodoList";

import styles from "./styles.module.scss";

const TaskListView = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    inputText !== ""
      ? setListTodo([...listTodo, inputText])
      : alert("ВВЕДИТЕ ТЕКСТ!!!");
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <TodoInput addList={addList} />
        <h1> TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskListView;
