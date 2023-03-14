import React from "react";
import styles from "./todostyles.module.scss";

function Todolist(props) {
  return (
    <div className={styles.wrapper}>
      <li className={styles.tasklist}>
        {props.item}
        <span>
          <button
            className={styles.btndel}
            onClick={(event) => {
              props.deleteItem(props.index);
            }}
          >
            {" "}
            DELETE
          </button>
        </span>{" "}
      </li>
    </div>
  );
}

export default Todolist;
